import requests
from bs4 import BeautifulSoup

# URL da página que contém o áudio
url = 'https://www.radios.com.br/aovivo/radio-super-amazonia-brasil/150873'

# Faz a requisição para obter o conteúdo da página
response = requests.get(url)
html_content = response.text

# Cria o objeto BeautifulSoup para analisar o HTML
soup = BeautifulSoup(html_content, 'html.parser')

# Encontra todos os elementos <audio> e extrai os links
audio_tags = soup.find_all('audio')

audio_links = []
for tag in audio_tags:
    if tag.get('src'):  # Verifica se o elemento <audio> tem um atributo 'src'
        audio_links.append(tag.get('src'))

# Exibe os links de áudio encontrados
for i, link in enumerate(audio_links):
    print(f"Link de áudio {i+1}: {link}")
