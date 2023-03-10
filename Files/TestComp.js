import { 
    Box,
    Input,
    Pressable,
    Text

} from "native-base"
export default function TestComp(){
return(
    <Box flex={1} my="4" justifyContent='center'>
      <Pressable _pressed={{
      bg: "primary.700"
    }} bg="primary.900" py="2" px="3" rounded="sm" alignSelf="center">
        <Text textTransform="uppercase" fontWeight="bold" color="white">
          Hover
        </Text>
      </Pressable>
    </Box>
)

}