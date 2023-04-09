# Используем node.js в качестве базового образа
FROM node:latest

# Устанавливаем рабочую директорию приложения в контейнере
WORKDIR /app

# Копируем package.json и package-lock.json в контейнер
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем файлы приложения в контейнер
COPY . .

# Открываем порт, на котором будет работать приложение
EXPOSE 3000

# Запускаем приложение
CMD ["npm", "run", "start:prod"]
