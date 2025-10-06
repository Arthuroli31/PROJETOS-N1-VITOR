package com.example.mesacerta.domain.model

import java.util.Date

data class Reservation(
    val id: Int,
    val restaurantId: Int,
    val restaurantName: String,
    val restaurantImage: String,
    val date: Date,
    val time: String,
    val guests: Int,
    val specialRequests: String?,
    val status: ReservationStatus
)

enum class ReservationStatus {
    PENDING,
    CONFIRMED,
    CANCELLED,
    COMPLETED
}
