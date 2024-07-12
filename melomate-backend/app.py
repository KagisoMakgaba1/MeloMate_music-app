import pickle
import pandas as pd
from flask import Flask, request, jsonify
from flask_cors import CORS
import spotipy
from spotipy.oauth2 import SpotifyClientCredentials
from sklearn.metrics.pairwise import cosine_similarity

app = Flask(__name__)
CORS(app)

# Spotify credentials
CLIENT_ID = "8fdc230948e14e559918b13148c11fb0"
CLIENT_SECRET = "eff8512c69a048cea8b87b649318c1ab"

# Initialize the Spotify client
client_credentials_manager = SpotifyClientCredentials(client_id=CLIENT_ID, client_secret=CLIENT_SECRET)
sp = spotipy.Spotify(client_credentials_manager=client_credentials_manager)

# Load data
music = pickle.load(open('df.pkl', 'rb'))
similarity = pickle.load(open('similarity.pkl', 'rb'))

# Function to get song album cover URL
def get_song_album_cover_url(song_name, artist_name):
    search_query = f"track:{song_name} artist:{artist_name}"
    results = sp.search(q=search_query, type="track")

    if results and results["tracks"]["items"]:
        track = results["tracks"]["items"][0]
        album_cover_url = track["album"]["images"][0]["url"]
        return album_cover_url
    else:
        return "https://i.postimg.cc/0QNxYz4V/social.png"

# Function to recommend songs
def recommend(song):
    index = music[music['song'] == song].index[0]
    distances = sorted(list(enumerate(similarity[index])), reverse=True, key=lambda x: x[1])
    recommended_music_names = []
    recommended_music_posters = []
    for i in distances[1:21]:
        artist = music.iloc[i[0]].artist
        recommended_music_posters.append(get_song_album_cover_url(music.iloc[i[0]].song, artist))
        recommended_music_names.append(music.iloc[i[0]].song)

    return recommended_music_names, recommended_music_posters

@app.route('/recommend', methods=['POST'])
def get_recommendations():
    data = request.json
    song = data['song']
    recommended_music_names, recommended_music_posters = recommend(song)
    recommendations = [{'name': name, 'album_cover_url': poster} for name, poster in zip(recommended_music_names, recommended_music_posters)]
    return jsonify(recommendations)

@app.route('/songs', methods=['GET'])
def get_songs():
    songs = music['song'].tolist()
    return jsonify(songs)

if __name__ == '__main__':
    app.run(debug=True)