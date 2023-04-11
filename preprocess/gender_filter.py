import pandas as pd

# Load CSV file into a DataFrame
df = pd.read_csv('resources/smmh.csv')

# Filter rows by gender column
df = df[df['2. Gender'].isin(['Male', 'Female'])]

# Save the filtered DataFrame to a new CSV file
df.to_csv('resources/filtered_dataset.csv', index=False)
