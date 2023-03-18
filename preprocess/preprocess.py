import pandas as pd

# Read in the CSV file
df = pd.read_csv('resources/smmh.csv')

# Drop any rows with missing values
df = df.dropna()

# get the subset of the columns you need
subset = df[["6. Do you use social media?",
             "12. On a scale of 1 to 5, how easily distracted are you?",
             "14. Do you find it difficult to concentrate on things?",
             "20. On a scale of 1 to 5, how often do you face issues regarding sleep?"]]


# Save the cleaned and subsetted data to a new CSV file
subset.to_csv('resources/cleaned_subset.csv', index=False)
