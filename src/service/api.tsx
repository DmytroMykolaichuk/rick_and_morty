const BASE_URL = 'https://rickandmortyapi.com/api/';

async function fetchData<T>(endpoint: string): Promise<T> {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`);
    if (!response.ok) {
      throw new Error(
        `Error fetching data from ${BASE_URL}${endpoint}: ${response.statusText}`
      );
    }
    return response.json();
  } catch (error) {
    console.error(`Fetch error: ${error}`);
    throw error;
  }
}

export async function getSeasons(ids: number[]): Promise<Episode[]> {
  return fetchData<Episode[]>(`episode/${ids}`);
}

export async function getInitialPages(
  endpoint: string,
  page: number
): Promise<InitialPages> {
  return fetchData<InitialPages>(`${endpoint}/?page=${page}`);
}

export async function getCharacter(id: number): Promise<CharacterProp> {
  return fetchData<CharacterProp>(`character/${id}`);
}

export async function getEpisode(id: number): Promise<{
  name: string;
  air_date: string;
  episode: string;
  characters: CharacterProp[];
}> {
  try {
    const { name, air_date, episode, characters } = await fetchData<Episode>(
      `episode/${id}`
    );

    const fetchedCharacters = await Promise.all(
      characters.map(async url => {
        const characterResponse = await fetch(url);
        if (!characterResponse.ok) {
          throw new Error(
            `Error fetching character: ${characterResponse.statusText}`
          );
        }
        return characterResponse.json();
      })
    );

    return { name, air_date, episode, characters: fetchedCharacters };
  } catch (error) {
    console.error(`Error fetching episode: ${error}`);
    throw error;
  }
}

export async function getLocation(id: number): Promise<{
  name: string;
  dimension: string;
  type: string;
  characters: CharacterProp[];
}> {
  try {
    const { name, dimension, type, residents } = await fetchData<Location>(
      `location/${id}`
    );

    const fetchedCharacters = await Promise.all(
      residents.map(async url => {
        const characterResponse = await fetch(url);
        if (!characterResponse.ok) {
          throw new Error(
            `Error fetching character: ${characterResponse.statusText}`
          );
        }
        return characterResponse.json();
      })
    );

    return { name, dimension, type, characters: fetchedCharacters };
  } catch (error) {
    console.error(`Error fetching location: ${error}`);
    throw error;
  }
}
