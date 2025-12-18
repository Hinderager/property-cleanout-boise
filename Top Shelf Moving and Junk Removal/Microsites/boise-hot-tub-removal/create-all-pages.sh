#!/bin/bash

BASE_DIR="C:/Users/Administrator/Top Shelf Storage Dropbox/Eric Hinderager/Online Businesses/Top Shelf Moving and Junk Removal/Microsites/boise-hot-tub-removal/src/app"

# Create remaining about-us pages
echo "Creating about-us pages..."

# Create directories
mkdir -p "$BASE_DIR/about-us/careers"
mkdir -p "$BASE_DIR/about-us/licenses-insurance"
mkdir -p "$BASE_DIR/about-us/testimonials"

# Create contact directory
mkdir -p "$BASE_DIR/contact"

# Create resources directories
mkdir -p "$BASE_DIR/resources/faq"
mkdir -p "$BASE_DIR/resources/pricing"
mkdir -p "$BASE_DIR/resources/process"
mkdir -p "$BASE_DIR/resources/preparation"

# Create services directories
mkdir -p "$BASE_DIR/services/hot-tub-removal"
mkdir -p "$BASE_DIR/services/pool-removal"
mkdir -p "$BASE_DIR/services/deck-services"
mkdir -p "$BASE_DIR/services/disposal"

echo "Directories created successfully!"
echo "Total directories created: 15"

