1. Cài json-server-auth

   - json-server-auth chỉ tương thích với json-server 0.17.4 đổ lại.
   - Cài đặt json-server-auth:
     ```bash
     npm install json-server-auth@1.0.0 json-server@0.17.4
     ```

2. Tạo db.json có `users`.
3. Sửa package.json:

```bash
	"dev": "concurrently \"vite\" \"json-server --watch db.json --port 3000\"",
```

4. Khai báo authSchema.js
5. Tạo authApi.js
6. Code Component RegisterPage.jsx
7. Cấu hình route trong App.jsx
