// This file handles MongoDB operations
// For now, it's a placeholder - you'll need to set up a backend API

export const saveGameData = async (gameData) => {
  try {
    // In a real implementation, you would send this to your backend API
    console.log('Saving game data:', gameData);
    
    // Example API call (you'll need to create this endpoint):
    // const response = await fetch('http://localhost:5000/api/save-game', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(gameData)
    // });
    // return await response.json();
    
    // For now, just log to console
    localStorage.setItem('lastGame', JSON.stringify(gameData));
    return { success: true };
  } catch (error) {
    console.error('Error saving game data:', error);
    return { success: false, error };
  }
};

export const getGameHistory = async (username) => {
  try {
    // In real implementation, fetch from your backend
    const lastGame = localStorage.getItem('lastGame');
    return lastGame ? JSON.parse(lastGame) : null;
  } catch (error) {
    console.error('Error fetching game history:', error);
    return null;
  }
};