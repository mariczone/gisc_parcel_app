# Use Node alpine as the base image.
FROM node:16.16.0-alpine

# Create app directory
WORKDIR /usr/src/app
# Copy file include dist/ (check .gitlab-ci.yml)
COPY . .

# Install package
RUN npm ci --omit=dev

# Expose our server port.
EXPOSE 4200

# Run our app.
CMD ["npm", "start"]
