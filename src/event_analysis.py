import pandas as pd
import matplotlib.pyplot as plt
from datetime import datetime

class EventsAnalysis:
    def __init__(self, csv_file):
        self.csv_file = csv_file
        self.events_df = pd.DataFrame()
        self.load_data()

    def load_data(self):
        """Load event data from CSV."""
        try:
            self.events_df = pd.read_csv(self.csv_file)
            self.events_df['start_date'] = pd.to_datetime(self.events_df['start_date'])
            self.events_df['end_date'] = pd.to_datetime(self.events_df['end_date'])
            print(f"Data loaded successfully from {self.csv_file}.")
        except Exception as e:
            print(f"Error loading data: {e}")

    def get_event_summary(self):
        """Get a summary of events."""
        return self.events_df.describe()

    def count_events_by_type(self):
        """Count events by type."""
        return self.events_df['event_type'].value_counts()

    def visualize_events_over_time(self):
        """Visualize events occurring over time."""
        plt.figure(figsize=(12, 6))
        for index, row in self.events_df.iterrows():
            plt.plot([row['start_date'], row['end_date']], [index, index], marker='o')
            plt.text(row['start_date'], index, row['event_name'], verticalalignment='bottom', fontsize=8)

        plt.title('Major Oil Market Events Over Time')
        plt.xlabel('Date')
        plt.ylabel('Events')
        plt.yticks(range(len(self.events_df)), self.events_df['event_name'])
        plt.xticks(rotation=45)
        plt.grid()
        plt.tight_layout()
        plt.show()

    def filter_events_by_year(self, year):
        """Filter events that occurred in a specific year."""
        start_of_year = datetime(year, 1, 1)
        end_of_year = datetime(year, 12, 31)
        return self.events_df[(self.events_df['start_date'] >= start_of_year) & 
                              (self.events_df['end_date'] <= end_of_year)]

if __name__ == "__main__":
    # Path to the CSV file
    csv_path = "../data/processed/major_oil_market_events.csv"
    
    # Create an instance of EventsAnalysis
    analysis = EventsAnalysis(csv_path)
    
    # Print summary of events
    print(analysis.get_event_summary())
    
    # Print count of events by type
    print(analysis.count_events_by_type())
    
    # Visualize events over time
    analysis.visualize_events_over_time()
    
    # Example: Filter events by year
    year = 2020
    filtered_events = analysis.filter_events_by_year(year)
    print(f"Events in {year}:")
    print(filtered_events)