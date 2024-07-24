#!/bin/bash

# Variables
DB_NAME="testcases"
DB_USER="postgres"
DUMP_FILE="db/testcases.dump"

# Create the database
createdb -U $DB_USER $DB_NAME

# Restore the database from the dump file
pg_restore -U $DB_USER -d $DB_NAME -v $DUMP_FILE
