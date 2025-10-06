package com.example.mesacerta.domain.model

data class Restaurant(
    val id: Int,
    val name: String,
    val description: String,
    val address: String,
    val phone: String,
    val email: String,
    val imageUrl: String,
    val rating: Float,
    val priceRange: String,
    val cuisineType: String,
    val latitude: Double,
    val longitude: Double,
    val isOpen: Boolean,
    val openingHours: Map<String, String>,
    val specialties: List<String>,
    val isFavorite: Boolean = false
)
