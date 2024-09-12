import { Post } from '@/api/poke';
import { PokeType } from '@/models/poke.interface';
import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';


export default function HomeScreen() {

  const [posts, setPokes] = useState<PokeType[]>()
  const [id, setId] = useState(0)

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    const response = await Post.getPokes()
    setPokes(response)
    console.log(response)
  }

  /*async function sendPoke(){
    const response = await Post.createPoke({
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/823.png',
      name: 'Corviknight',
      height: 22,
      weight: 750
    })
  }*/

  async function sendNewPoke(post: PokeType) {
    const response = await Post.createPoke(post)
    let postList = [...posts]
    postList.push(response)
    setPokes(postList)
  }

  async function getAPoke(id: number) {
    const response = await Post.getAPoke(id)
    let list = []
    list.push(response)
    setPokes(list)
  }


  return (
    <>
      <View>

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
