package com.example.mesacerta.domain.model

data class User(
    val id: Int,
    val name: String,
    val email: String,
    val phone: String,
    val profileImage: String? = null
)
