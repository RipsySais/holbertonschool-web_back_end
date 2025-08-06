# Python Object Relational Mapping

This module contains scripts for working with MySQL databases using both MySQLdb and SQLAlchemy.

## Tasks

### MySQLdb Tasks (0-5)
- **0-select_states.py**: Lists all states from database
- **1-filter_states.py**: Filters states starting with 'N'
- **2-my_filter_states.py**: Filters states by name (vulnerable to SQL injection)
- **3-my_safe_filter_states.py**: Filters states by name (SQL injection safe)
- **4-cities_by_state.py**: Lists all cities with their states
- **5-filter_cities.py**: Filters cities by state name

### SQLAlchemy Tasks (6-14)
- **model_state.py**: State model definition
- **6-model_state.py**: Creates State table
- **7-model_state_fetch_all.py**: Lists all State objects
- **8-model_state_fetch_first.py**: Prints first State object
- **9-model_state_filter_a.py**: Filters states containing 'a'
- **10-model_state_my_get.py**: Gets state by name
- **11-model_state_insert.py**: Adds new state
- **12-model_state_update_id_2.py**: Updates state with id=2
- **13-model_state_delete_a.py**: Deletes states containing 'a'
- **model_city.py**: City model definition
- **14-model_city_fetch_by_state.py**: Lists all cities with states

## Requirements

- MySQL 8.0
- MySQLdb module 2.0.x
- SQLAlchemy module 1.4.x 