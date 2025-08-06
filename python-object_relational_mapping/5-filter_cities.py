#!/usr/bin/python3
"""
Script that takes in the name of a state as an argument and lists all cities of that state
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

    # Execute query to select cities of the specified state ordered by cities.id
    cursor.execute("""
        SELECT cities.name 
        FROM cities 
        JOIN states ON cities.state_id = states.id 
        WHERE states.name = %s 
        ORDER BY cities.id ASC
    """, (state_name,))

    # Fetch all rows
    rows = cursor.fetchall()

    # Print city names separated by commas
    city_names = [row[0] for row in rows]
    if city_names:
        print(", ".join(city_names))
    else:
        print()

    # Close cursor and database connection
    cursor.close()
    db.close() 