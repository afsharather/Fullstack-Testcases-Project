from flask import Flask, request, jsonify
from flask_cors import CORS
import psycopg2

app = Flask(__name__)
CORS(app)

# Database connection
def get_db_connection():
    conn = psycopg2.connect(
        dbname='testcases',
        user='postgres',
        password='1234',
        host='localhost',
        port='5432'
    )
    return conn

@app.route('/testcases', methods=['GET'])
def get_testcases():
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute('SELECT * FROM testcases;')
    testcases = cur.fetchall()
    cur.close()
    conn.close()
    return jsonify(testcases)

@app.route('/testcases', methods=['PUT'])
def update_testcase():
    data = request.json
    name = data.get('name')
    
    status = data.get('status')
    estimate_time= data.get('estimate_time')
    priority=data.get('priority')
    module=data.get('module')

    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute('SELECT * FROM testcases;')
    testcases = cur.fetchall()
    query =     'INSERT INTO testcases (id,name,estimate_time,module,priority,status) VALUES (%s,%s,%s,%s,%s,%s);'
    values =( len(testcases)+1,name,estimate_time, module, priority, status)
    print(query)
    cur.execute(
    query,values
    )
    conn.commit()
    cur.close()
    conn.close()
    return jsonify({'status': 'success'})

if __name__ == '__main__':
    app.run(debug=True)
