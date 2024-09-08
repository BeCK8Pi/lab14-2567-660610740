"use client";
import { Center } from "@mantine/core";
import { Rating } from "@mantine/core";
import { Textarea } from "@mantine/core";
import { Button } from "@mantine/core";
import { Pagination } from "@mantine/core";
import { Divider } from "@mantine/core";
import { Group } from "@mantine/core";
import { Container, Text, Title } from "@mantine/core";

export default function Home() {
  return (
    <div>
      <Container size="600px" pl="1rem" pr="1rem">
      <Title order={2}>Food Review 🍕</Title>
      <Text mt="0.75rem" size="1.1rem" fw={700}>Your rating</Text>
      <Rating defaultValue={0} size="lg" mb="0.75rem"/>
      <Textarea
          label="Your review"
          placeholder="Do you enjoy eating?"
          mb="0.75rem"
          rows={3}
      />
      <Button variant="filled" color="orange">Submit review</Button>
      <Divider mt="0.75rem" mb="0.75rem"/>
      <Center><Group ml="auto" mr="auto"><Title order={4}>Elon Musk</Title><Rating defaultValue={5} readOnly/></Group></Center>
      <Text ta="center" c="dimmed">Best pizza in this world. I give you X score.</Text>
      <Divider mt="0.75rem" mb="0.75rem"/>
      <Center><Group><Title ta="center" order={4}>Mark Zuck</Title> <Rating defaultValue={4} readOnly/></Group></Center>
      <Text ta="center" c="dimmed">My favourite part is pepperoni</Text>
      <Center><Pagination mt="1rem" total={20} color="orange"/></Center>
      <Text m="0.75rem" ta="center" c="dimmed" size="1rem">
        Copyright © 2024 Kritsaran Khuntip 660610740
      </Text>
    </Container>
    </div>
    
    
  );
}
