import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert, Button } from 'react-native'
import React, { useCallback, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { getCursos } from '../services/CursoService'

const HomeScreen = ({ navigation }) => {

  //Lista de cursos mocado
  /*const itens = [
      { id: "1", name: "Curso de React Native", description: "Aprenda a criar apps para iOS e Android" },
      { id: "2", name: "Curso de Java Spring Boot", description: "Cronstua APIs robustas com Java e Spring" },
      { id: "3", name: "Curso de AWS", description: "Domine os serviços da AWS e obtenha certificação" },
      { id: "4", name: "Curso de Python para Data Science", description: "Analise dados com Python e Pandas"  }

  ]*/
  const [itens, setItens] = useState([])

  const carregarCursos = async () => {
    const cursos = await getCursos()
    setItens(cursos)
  }

  useFocusEffect(
    useCallback(() => {
      carregarCursos()
    }, [])
  )

  const confirmarExclusao =(id) => {
    Alert.alert('Confirmar', 'Deseja realmente excluir este curso?',[
      { text: 'Cancelar', style: 'cancel'},
      {
        text:'Excluir',
        style: 'destructive',
        onPress: async () => {
          await deletarCurso(id)
          carregarCursos()
        }
      }
    ])
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>📚Cursos Disponíveis</Text>
      <Button title='Adicionar Curso' onPress={() => navigation.navigate('CursoForm')}/>
      <FlatList
        data={itens}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => navigation.navigate('Details', {
              itemId: item.id,
              name: item.name,
              description: item.description
            })}
          >
            <Text style={styles.itemTitle}>{item.name}</Text>
            <Text style={styles.itemDescription}>{item.description}</Text>
            <Button tittle="🗑️" onPress={() => confirmarExclusao(item.id)} color="#d9534f"/>
          </TouchableOpacity>
        )

        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  itemContainer: { backgroundColor: '#fff', padding: 15, marginBottom: 10, borderRadius: 8, elevation: 2 },
  itemTitle: { fontSize: 18, fontWeight: 'bold' },
  itemDescription: { fontSize: 14, color: '#555' },
})

export default HomeScreen