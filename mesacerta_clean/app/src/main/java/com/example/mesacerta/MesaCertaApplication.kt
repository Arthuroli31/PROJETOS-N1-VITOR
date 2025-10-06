package com.example.mesacerta

import android.app.Application
import dagger.hilt.android.HiltAndroidApp

@HiltAndroidApp
class MesaCertaApplication : Application() {
    override fun onCreate() {
        super.onCreate()
        // Inicializações globais do aplicativo podem ser feitas aqui
    }
}
