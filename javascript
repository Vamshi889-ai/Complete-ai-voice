// Inside draw() loop (replace AI voice section):

// Check for voice trigger (enemy ahead in same lane)
if (e.x === player.x && e.y > 300 && e.y < 400 && Date.now() - lastVoiceTime > voiceCooldown) {
    // Suggest lane change
    if (player.x === 50) {
        speak("Car ahead, take right and reduce speed to 40");
    } else if (player.x === 200) {
        speak("Car ahead, take left and reduce speed to 40");
    } else {
        // Middle lane → choose best side
        speak("Car ahead, choose safe side and slow down");
    }
    lastVoiceTime = Date.now();
}
