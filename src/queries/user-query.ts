export const userQueries = {
	createUser: "INSERT INTO users(email, password, name, role) values(?, ?, ?, 'User')",
	getByEmail: "SELECT * FROM users WHERE email = ?"
}