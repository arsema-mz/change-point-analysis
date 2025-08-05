import pandas as pd

def load_event_data():
    df = pd.read_csv('./data/processed/major_oil_market_events.csv')
    return df.to_dict(orient='records')
