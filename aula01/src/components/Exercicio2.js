import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import { useState } from 'react'


const Exercicio2 = () => {

    const [contador, setContador] = useState(0)

    function incrementar() {
        setContador(contador+1)
    }

    function decrementar () {
        setContador(contador-1)
    }

  return (
    <View style = {styles.container}>
      <Button title='incrementar' onPress={incrementar}/>
      <Text>O contador está em: {contador}</Text>
      <Button title='decrementar' onPress={decrementar}/>
      

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        alingItems: 'center',
        justifyContent: 'center',
        padding: 100
    }
})

export default Exercicio2