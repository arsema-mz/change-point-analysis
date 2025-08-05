from flask import Blueprint, jsonify
import os
import pandas as pd
from flask import jsonify
import json


bp = Blueprint("api", __name__)

@bp.route("/events")
def get_events():
    path = os.path.join("..", "data", "processed", "major_oil_market_events.csv")
    df = pd.read_csv(path)
    return jsonify(df.to_dict(orient="records"))

@bp.route('/oil-prices')
def get_oil_prices():
    path = os.path.join("..", "data", "raw", "BrentOilPrices.csv")
    df = pd.read_csv(path)    
    df = df[['Date', 'Price']].dropna()
    data = df.to_dict(orient='records')
    return jsonify(data)

@bp.route("/log-returns")
def get_log_returns():
    path = os.path.join("..", "data", "processed", "log_returns.csv")
    df = pd.read_csv(path)
    return jsonify(df.to_dict(orient="records"))

@bp.route("/summary-stats")
def get_summary_stats():
    path = os.path.join("..", "data", "processed", "summary_stats.json")
    with open(path) as f:
        stats = json.load(f)
    return jsonify(stats)