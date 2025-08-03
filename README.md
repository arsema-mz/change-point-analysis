# Brent Oil Market Events Analysis

## Project Overview

The objective of this project is to analyze the impact of major geopolitical events, OPEC decisions, and economic shocks on Brent oil prices. The analysis aims to extract statistically valid insights that are relevant to business objectives within the oil market.

## Objectives

1. **Defining the data analysis workflow**
2. **Understanding the model and data**
3. **Extracting statistically valid insights in relation to the business objective**

### Laying the Foundation for Analysis

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

#### Advanced Extensions

- **Future Work:**
  - Explore the incorporation of other data sources (e.g., GDP, inflation rates).
  - Consider advanced models like VAR or Markov-Switching to analyze dynamic relationships.

### Developing an Interactive Dashboard for Data Analysis Results

**Planned:**

- **Dashboard Application:**
  - Build a Flask backend to serve data from analysis results.
  - Develop a React frontend to visualize results, focusing on user-friendly interfaces and interactive visualizations.

**Key Components:**
- **Backend (Flask):**
  - Create APIs for data access and real-time updates (if necessary).
  
- **Frontend (React):**
  - Design interactive features for exploring how events correlate with Brent oil prices, including filters and date ranges.
