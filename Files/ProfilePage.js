import { Box, Button, Heading, Image, Input, VStack, Pressable, Text, Center } from "native-base"

import Colors from "./color.js"
import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import PageTabViewer from "./PageTabViewer.js"
export default function ProfilePage(){
return(
   <Box flex={1}  bg={Colors.main} safeAreaTop>
        <Box  p="2" pb="4" pt="4" bg={Colors.main}>
            <Center>
            
                <Image w={95} h={95} resizeMode={"contain"} alt="Profiler" source={{uri:"https://res.cloudinary.com/dacodingsalaf/image/upload/v1678120356/avater_yafgih.png"}} />
                <Text fontSize={18} color={Colors.white}>Olasunkanmi Abass</Text>
                <Text fontStyle="italic" color={Colors.white}>Joined Dec 12 2019</Text>
            </Center>
        </Box>
        <PageTabViewer />
   </Box>
)
} 