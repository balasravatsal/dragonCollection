#!/bin/bash

export PGPASSWORD='1234'

echo "Configuring dragonstackdb"
echo
echo
echo
dropdb -U postgres -h localhost dragonstackdb
createdb -U postgres -h localhost dragonstackdb

psql -U node_user -h localhost dragonstackdb < ./sql/generation.sql
psql -U node_user -h localhost dragonstackdb < ./sql/dragon.sql
echo
echo
echo
echo "dragonstackdb configured"
