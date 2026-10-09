import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';
import { Collapsible } from './ui/collapsible';




export default function Componente1() {
  return (

    <ThemedView style={styles.container}>

    <Image
      source={require('../../assets/images/Regieleki.png')}
      style={styles.image}
    />
    <Collapsible title="Regieleki">
    <ThemedText type="title" bold underline>
      Regieleki es el pokemon mas rapido con 200 de velocidad base
    </ThemedText>
    </Collapsible>
    </ThemedView>

  );
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'rgb(61, 217, 49)',
  },
  image: {
    width: 300,
    height: 300,
  },
});