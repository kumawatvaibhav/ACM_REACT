import os
import numpy as np
import matplotlib.pyplot as plt
from matplotlib.backends.backend_qt5agg import FigureCanvasQTAgg as FigureCanvas, NavigationToolbar2QT
from matplotlib.backend_bases import MouseEvent
from matplotlib.widgets import Cursor
from matplotlib.ticker import FuncFormatter
from obspy.core import read
from datetime import timedelta
from PySide6.QtCore import Qt
from PySide6.QtWidgets import QMainWindow, QWidget, QVBoxLayout, QPushButton, QLabel, QHBoxLayout
from sharedvariables import SharedVariables
import pytz

class RawTimeDomainWindow(QMainWindow):

    def __init__(self):
        super().__init__()
        self.current_index = 0
        self.mseed_folder_path=SharedVariables().mseed_folder_path
        self.allStationNameList=[folder for folder in os.listdir(self.mseed_folder_path) if os.path.isdir(os.path.join(self.mseed_folder_path, folder))]
        self.rejectedStationListPath= os.path.join(self.mseed_folder_path, ".rejected_stations.list")
        self.rejected_stations_list = self.load_rejected_stations()
        
        self.init_ui()
        
    def init_ui(self):
        
        self.setWindowTitle("Raw Time Domain Graph")
        self.showMaximized()
        
        self.central_widget = QWidget()
        self.setCentralWidget(self.central_widget)

        self.layout = QVBoxLayout(self.central_widget)

        # Station name label
        self.station_label = QLabel("", self)
        self.station_label.setAlignment(Qt.AlignCenter)
        font = self.station_label.font()
        font.setPointSize(14)
        font.setBold(True)
        self.station_label.setFont(font)
        self.layout.addWidget(self.station_label)

        self.figure, self.ax = plt.subplots(3, 1, figsize=(10, 8), sharex=True)
        self.canvas = FigureCanvas(self.figure)
        self.layout.addWidget(self.canvas)

        self.toolbar = NavigationToolbar2QT(self.canvas, self)  # Add Matplotlib toolbar
        self.layout.addWidget(self.toolbar)

        self.button_layout = QHBoxLayout()
        self.prev_button = QPushButton("Prev Station")
        self.prev_button.setFixedSize(120, 40)
        self.prev_button.clicked.connect(self.plot_prev_station)
        self.button_layout.addWidget(self.prev_button, alignment=Qt.AlignLeft)

        self.next_button = QPushButton("Next Station")
        self.next_button.setFixedSize(120, 40)
        self.next_button.clicked.connect(self.plot_next_station)
        self.button_layout.addWidget(self.next_button, alignment=Qt.AlignRight)

        self.layout.addLayout(self.button_layout)

        self.lines = [None, None, None]
        colors = ['blue', 'green', 'red']
        labels = ['BHZ', 'BHN', 'BHE']
        for i, (color, label) in enumerate(zip(colors, labels)):
            self.lines[i], = self.ax[i].plot([], [], color=color, label=label)
            self.ax[i].legend(loc="upper right", fontsize="small", frameon=False)
            self.ax[i].set_title(f"{label} Component")
        self.ax[2].set_xlabel("Time")
        self.figure.tight_layout()

        self.hover_label = QLabel("", self)
        self.layout.addWidget(self.hover_label)
        self.canvas.mpl_connect("motion_notify_event", self.on_hover)

        self.update_plot()
    
    def update_plot(self):
        stationName= self.allStationNameList[self.current_index]
        station_path = os.path.join(self.mseed_folder_path, stationName)
        self.update_title(stationName)
        bh_z, bh_n, bh_e = self.readMseedFiles(station_path)

        self.plot_streams(bh_z, bh_n, bh_e)
        
    def readMseedFiles(self, station_path):
        bhz_data=[]
        bhn_data=[]
        bhe_data=[]
        for file in os.listdir(station_path):
            print("____I AM HERE____")
            if "BHZ" in file:
                bhz = read(os.path.join(station_path, file))
    
            elif "BHN" in file:
                bhn = read(os.path.join(station_path, file)) 
                
            elif "BHE" in file:
                bhe = read(os.path.join(station_path, file))
                
        bhz_data = bhz[0].data
        bhn_data = bhn[0].data
        bhe_data = bhe[0].data
            
        print("____LEFT LOOP_____")
        start_time = bhz[0].stats.starttime.datetime
        ist = pytz.timezone('Asia/Kolkata')
        self.start_time_ist = start_time.astimezone(ist)
        self.time_delta = bhz[0].stats.delta
    
        return bhz_data, bhn_data, bhe_data
        
    def plot_streams(self,bh_z, bh_n, bh_e):
        
        print("PLOTTING DATA")
        step_size = 100
        global_min = min(np.min(bh_z[::step_size]), np.min(bh_n[::step_size]), np.min(bh_e[::step_size]))
        global_max = max(np.max(bh_z[::step_size]), np.max(bh_n[::step_size]), np.max(bh_e[::step_size]))
        
        num_points = len(bh_z)
        indices = np.arange(num_points)
        self.lines[0].set_data(indices,bh_z)
        self.lines[1].set_data(indices,bh_n)
        self.lines[2].set_data(indices,bh_e)

        for ax, line in zip(self.ax, self.lines):
            x_data, y_data = line.get_data()
            ax.set_xlim(0, len(x_data))
            ax.set_ylim(global_min, global_max)
            ax.format_coord = lambda x, y: ""

        tick_count = 10  
        x_ticks = np.linspace(0, num_points - 1, tick_count, dtype=int)
        x_labels = [(self.start_time_ist + timedelta(seconds=i * self.time_delta)).strftime("%H:%M") for i in x_ticks]
        self.ax[2].set_xticks(x_ticks)
        self.ax[2].set_xticklabels(x_labels, rotation=0)

        self.canvas.draw()
        
    def load_rejected_stations(self):
        if os.path.exists(self.rejectedStationListPath):
            with open(self.rejectedStationListPath, 'r') as file:
                return [line.strip() for line in file.readlines()]
        return []


    def save_rejected_stations(self):
        with open(self.reject_file_path, 'w') as file:
            file.writelines(f"{station}\n" for station in self.rejected_stations)
            
            
    def update_title(self, station_name):
        self.station_label = f"Graph {self.current_index + 1} - {station_name}"
        if station_name in self.rejected_stations_list:
            font = self.station_label.font()
            font.setStrikeOut(True)
            self.station_label.setFont(font)
            
    def plot_prev_station(self):
        self.current_index = (self.current_index - 1) % len(self.allStationNameList)
        self.update_plot()

    def plot_next_station(self):
        self.current_index = (self.current_index + 1) % len(self.allStationNameList)
        self.update_plot()
        
    def on_hover(self, event: MouseEvent):
        
        if event.inaxes not in self.ax:
            self.hover_label.setText("")
            return

        for ax, line in zip(self.ax, self.lines):
            if event.inaxes == ax:
                x_data, y_data = line.get_data()
                if len(x_data) == 0 or len(y_data) == 0:
                    continue

                closest_index = np.argmin(np.abs(x_data - event.xdata))
                timestamp = (self.start_time_ist + timedelta(seconds=closest_index * self.time_delta)).strftime("%H:%M")
                self.hover_label.setText(f"Timestamp: {timestamp}")
                return
        