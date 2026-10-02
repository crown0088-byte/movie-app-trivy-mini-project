# Intentionally vulnerable base image for testing the Trivy gate
FROM nginx:1.19.0

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy our web app files to the Nginx serving directory
COPY index.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/
COPY app.js /usr/share/nginx/html/

# Expose port 80
EXPOSE 80
