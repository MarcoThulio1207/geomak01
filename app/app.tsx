import { Stack } from 'expo-router';

export default function App() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Início' }} />
      <Stack.Screen name="cadastro" options={{ title: 'Cadastro' }} />
      {/* Adicione outras telas aqui */}
    </Stack>
  )
}
