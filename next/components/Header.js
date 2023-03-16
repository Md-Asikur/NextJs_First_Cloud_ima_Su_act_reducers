import { useState, useEffect } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Flex,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  VStack,
  useToast,
} from "@chakra-ui/react";


import NewRequest from "@/pages/NewRequest";

export default function Header() {
  const [title, setName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState(null);
  const [clients, setClients] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
   const [images, setImages] = useState([]);
   const [imagesPreview, setImagesPreview] = useState([]);

  const isValidFormData = () => {
    if (!name) {
      return toast({
        title: "Preencha o campo nome!!",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  
   
  };

  const handleSubmitCreateClient = async (e) => {
    e.preventDefault();

    // if (isValidFormData()) return;
    try {
      setIsLoading(true);
      const { data } = await NewRequest.post("/product",{title});
      console.log(data)
      setClients(clients.concat(data.data));
      setName("");
      setEmail("");
      setIsFormOpen(!isFormOpen);
      toast({
        title: "Cadastrado com sucesso!",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const handleDeleteClient = async (_id) => {
    try {
      await NewRequest.delete(`/product/${_id}`);
      toast({
        title: "Deletado com sucesso!!",
        status: "info",
        duration: 9000,
        isClosable: true,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handlShowUpdateClient = (client) => {
    setId(client._id);
    setName(client.title);
    
    setIsFormOpen(true);
  };

  const handleUpdateClient = async (e) => {
    e.preventDefault();

   

    try {
      setIsLoading(true);
      await NewRequest.put(`/product/${id}`, { title });
      setName("");
     
      setId(null);
      setIsFormOpen(!isFormOpen);

      toast({
        title: "Atualizado com sucesso!",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const toast = useToast();

  useEffect(() => {
    [
      NewRequest.get("/product").then(({ data }) => {
        setClients(data.products);
        // console.log(data.products)
      }),
    ];
  }, [clients]);

  return (
    <Box>
      {/* <Header /> */}
      <Flex align="center" justifyContent="center">
        <Box width={800} borderWidth={1} borderRadius={8} boxShadow="lg" p={20} mt="25">
          <Flex justifyContent="flex-end">
            <Button colorScheme="green" onClick={() => setIsFormOpen(!isFormOpen)}>
              {isFormOpen ? "-" : "+"}
            </Button>
          </Flex>

          {isFormOpen ? (
            <VStack
              as="form"
              onSubmit={id ? handleUpdateClient : handleSubmitCreateClient}
            >
              <FormControl>
                <FormLabel>Nome</FormLabel>
                <Input
                  type="text"
                  placeholder="title"
                  onChange={(e) => setName(e.target.value)}
                  value={title}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Images</FormLabel>
                <Input
                  type="file"
                
                  onChange={(e) => setI(e.target.value)}
                 
                  multiple
                  accept="image/*"
                />
              </FormControl>

              <Button colorScheme="green" type="submit" mt={6} isLoading={isLoading}>
                {id ? "Update" : "Create"}
              </Button>
            </VStack>
          ) : null}

          <Table variant="simple" mt={6}>
            <Thead bgColor="teal.500">
              <Tr>
                <Th textColor="white">Name</Th>
                <Th textColor="white">Email</Th>
                <Th textColor="white">Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {clients?.map((client, index) => (
                <Tr key={index}>
                  <Td>{client?.title}</Td>

                  <Td justifyContent="space-between">
                    <Flex>
                      <Button
                        size="sm"
                        fontSize="small"
                        colorScheme="yellow"
                        mr="2"
                        onClick={() => handlShowUpdateClient(client)}
                      >
                        Editar
                      </Button>
                      <Button
                        size="sm"
                        fontSize="small"
                        colorScheme="red"
                        mr="2"
                        onClick={() => handleDeleteClient(client._id)}
                      >
                        Remover
                      </Button>
                    </Flex>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Flex>
    </Box>
  );
}
