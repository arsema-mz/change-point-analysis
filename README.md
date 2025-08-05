# Brent Oil Market Events Analysis

## Project Overview

The objective of this project is to analyze the impact of major geopolitical events, OPEC decisions, and economic shocks on Brent oil prices. The analysis aims to extract statistically valid insights that are relevant to business objectives within the oil market.

## Objectives

1. **Defining the data analysis workflow**
2. **Understanding the model and data**
3. **Extracting statistically valid insights in relation to the business objective**

### 🧠 Laying the Foundation for Analysis

- **Defining the Data Analysis Workflow:**
  - Outlined the steps and processes involved in analyzing Brent oil prices.
  - Researched and compiled a dataset of major oil market events, including their start dates and descriptions.
  - Identified assumptions and limitations of the analysis, emphasizing the distinction between correlation and causation.
  - Determined media channels and formats for communicating results to stakeholders.

- **Understanding the Model and Data:**
  - Reviewed key references to grasp concepts and models related to the project.
  - Analyzed time series properties of Brent oil prices, discussing trends and stationarity.
  - Explained the purpose of change point models in identifying structural breaks in price fluctuations and outlined expected outputs and limitations.

### Change Point Modeling and Insight Generation

#### Core Analysis (Mandatory)

- **Implement the Change Point Model:** 
  - Applied a Bayesian Change Point detection model using PyMC3 to identify significant structural breaks in Brent oil price data.
  
- **Identify Change Points:**
  - Interpreting model output to determine probable dates of significant changes in price behavior.

- **Associate Changes with Causes:**
  - Comparing detected change point dates with researched events to formulate hypotheses about triggers for shifts.

- **Quantify the Impact:**
  - Describing the quantitative impact of events associated with change points (e.g., average daily price shifts).


Of course! Here's the **Task 3 README section** written in clean **Markdown**:


### Developing an Interactive Dashboard for Data Analysis Results

#### 🔧 Backend (Flask)

* Built a modular Flask backend using Blueprints.
* Implemented the following API endpoints to serve analysis results:

  * `/api/oil-prices`: Returns historical Brent oil price data.
  * `/api/events`: Serves major political and economic events related to oil markets.
  * `/api/log-returns`: Provides precomputed log return values of Brent oil prices.
  * `/api/summary-stats`: Delivers statistical summaries for price trends.
* Ensured consistent and structured JSON responses for frontend integration.

#### 💻 Frontend (React + Vite)

* Developed a React-based dashboard for visualizing data from the Flask backend.
* Created the following interactive components:

  * **BrentOilChart**: Line chart of monthly Brent oil prices using `recharts`.
  * **LogReturnsChart**: Visualizes log returns over time.
  * **EventsList**: Lists impactful events affecting oil prices.
  * **SummaryStats**: Displays key summary statistics.
* Ensured a responsive and user-friendly layout with clean styling and structured component design.
* Used `axios` for API integration and `recharts` for interactive, responsive charts.

#### 🧠 Outcome

* The dashboard allows users to explore how oil prices change over time and how major events align with those changes.
* All data flows from a central Flask backend to a clean, modern React frontend, enabling seamless interaction and insight discovery.
