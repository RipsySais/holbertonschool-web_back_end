#!/usr/bin/python3
"""
Script that takes in an argument and displays all values in the states table
where name matches the argument (vulnerable to SQL injection)
"""

import MySQLdb
import sys

if __name__ == "__main__":
    # Get command line arguments
    username = sys.argv[1]
    password = sys.argv[2]
    database = sys.argv[3]
    state_name = sys.argv[4]

    # Connect to MySQL server
    db = MySQLdb.connect(
        host="localhost",
        port=3306,
        user=username,
        passwd=password,
        db=database
    )

    # Create cursor
    cursor = db.cursor()

    # Execute query with format (vulnerable to SQL injection)
    query = "SELECT * FROM states WHERE name = '{}' ORDER BY id ASC".format(state_name)
    cursor.execute(query)

    # Fetch all rows
    rows = cursor.fetchall()

    # Print each row
    for row in rows:
        print(row)

    # Close cursor and database connection
    cursor.close()
    db.close() 