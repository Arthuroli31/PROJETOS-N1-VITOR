package com.example.mesacerta.ui

import android.content.Intent
import android.os.Bundle
import android.os.Handler
import android.os.Looper
import androidx.appcompat.app.AppCompatActivity
import com.example.mesacerta.R
import com.example.mesacerta.databinding.ActivitySplashBinding
import dagger.hilt.android.AndroidEntryPoint

@AndroidEntryPoint
class SplashActivity : AppCompatActivity() {

    private lateinit var binding: ActivitySplashBinding
    
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivitySplashBinding.inflate(layoutInflater)
        setContentView(binding.root)
        
        // Simular um tempo de carregamento
        Handler(Looper.getMainLooper()).postDelayed({
            // Verificar se é o primeiro acesso para mostrar onboarding
            val isFirstLaunch = getSharedPreferences("MESACERTA_PREFS", MODE_PRIVATE)
                .getBoolean("IS_FIRST_LAUNCH", true)
                
            if (isFirstLaunch) {
                // Marcar que não é mais o primeiro lançamento
                getSharedPreferences("MESACERTA_PREFS", MODE_PRIVATE).edit()
                    .putBoolean("IS_FIRST_LAUNCH", false)
                    .apply()
                    
                // Navegar para o onboarding
                startActivity(Intent(this, OnboardingActivity::class.java))
            } else {
                // Navegar para a tela principal
                startActivity(Intent(this, MainActivity::class.java))
            }
            
            finish()
        }, SPLASH_DELAY)
    }
    
    companion object {
        private const val SPLASH_DELAY = 2000L // 2 segundos
    }
}
