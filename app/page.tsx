import { db } from './lib/db';
import { User } from './lib/definitions';

export default async function Home() {
  let users: User[] = [];
  try {
    const result = await db.query('SELECT id, username, psk FROM users', []);
    users = result.rows;
  } catch (error) {
    console.error('Error fetching users:', error);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Users</h1>
      <div className="w-full max-w-4xl">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b p-4">ID</th>
              <th className="border-b p-4">Username</th>
              <th className="border-b p-4">PSK</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="border-b p-4">{user.id}</td>
                <td className="border-b p-4">{user.username}</td>
                <td className="border-b p-4">{user.psk}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}