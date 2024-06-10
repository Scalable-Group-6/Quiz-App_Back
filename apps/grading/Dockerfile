# Gunakan base image Node.js yang mendukung multi-arch
FROM node:alpine

# Buat direktori kerja
WORKDIR /app

# Salin file package.json dan package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Salin seluruh kode aplikasi
COPY . .

# Build aplikasi NestJS
RUN npm run build

# Ekspos port yang akan digunakan
EXPOSE 3001

CMD ["node", "dist/apps/grading/main"]
