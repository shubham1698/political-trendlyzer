// lib/oracle_db_conn.ts
import oracledb, { Connection } from 'oracledb';

let connection: Connection | null = null;

export async function initDB(): Promise<Connection> {
  if (!connection) {
    try {
      connection = await oracledb.getConnection({
        user: process.env.ORACLE_DB_USER!,
        password: process.env.ORACLE_DB_PASSWORD!,
        connectString: process.env.ORACLE_DB_CONNECT_STRING!,
      });
      console.log('Successfully connected to Oracle Database');
      const result = await connection.execute('SELECT * FROM USTRADEDATA');
      console.log(result )
    } catch (err) {
      console.error('Error connecting to Oracle Database:', err);
      throw err;
    }
  }
  return connection!;
}

export async function closeDB(): Promise<void> {
  if (connection) {
    try {
      await connection.close();
      console.log('Connection to Oracle Database closed');
    } catch (err) {
      console.error('Error closing Oracle Database connection:', err);
      throw err;
    } finally {
      connection = null;
    }
  }
}
