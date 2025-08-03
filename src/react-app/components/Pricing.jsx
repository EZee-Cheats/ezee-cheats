import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { SimpleGrid, Card, Text, Badge, Group, Stack, Box, Alert, Loader, Title, Select, useMantineColorScheme, Tooltip, Container, Button, Grid, List, ThemeIcon, Center, Divider } from '@mantine/core';
import { IconCheck, IconStar, IconRocket, IconCrown, IconShield, IconReceipt2 } from '@tabler/icons-react';

const Pricing = () => {
    return (
        <Stack gap="xl" className="container-vertical">
            {/* Hero Section */}
            <Container size="900" style={{ width: "100%" }} py="xl">
                <Center>
                    <Stack align="center" gap="lg">
                        <Title order={1} size="h1" ta="center" c="primary">
                            Pricing
                        </Title>
                        <Text size="xl" ta="center" c="dimmed" maw={600}>
                            What kind of EZee Gamer are you?
                        </Text>
                    </Stack>
                </Center>
            </Container>

            <Divider />

            {/* Pricing Cards */}
            <Container size="900" style={{ width: "100%" }} mt="md">
                <Grid>
                    {/* Trial Plan */}
                    <Grid.Col span={{ base: 12, xs: 4 }} style={{ marginBottom: 8 }}>
                        <Card shadow="sm" padding="xl" radius="md" h="100%">
                            <Stack gap="lg" h="100%">
                                <Stack gap="sm" align="center">
                                    <ThemeIcon size="xl" color="blue" radius="md">
                                        <IconRocket size={28} />
                                    </ThemeIcon>
                                    <Title order={3} ta="center">Newby</Title>
                                    <Text ta="center" c="dimmed">Perfect for trying out EZee Rotation</Text>
                                </Stack>

                                <Stack gap="xs" align="center">
                                    <Group gap="xs" align="baseline">
                                        <Text size="2rem" fw={700} c="primary">$5</Text>
                                    </Group>
                                    <Text size="sm" c="dimmed">3 Day Trial</Text>
                                </Stack>

                                <Center>
                                    <List spacing="sm" size="sm" center icon={
                                        <ThemeIcon color="blue" size={20} radius="xl">
                                            <IconCheck size={12} />
                                        </ThemeIcon>
                                    }>
                                        <List.Item>EZee Rotation access</List.Item>
                                        <List.Item>One-Button mode</List.Item>
                                        <List.Item>Anti-ban randomization</List.Item>
                                        <List.Item>Auto updates</List.Item>
                                        <List.Item>Discord community access</List.Item>
                                    </List>
                                </Center>

                                <Button className="mantineButtonDefaultColor" size="lg" mt="auto" color="blue">
                                    Test Drive
                                </Button>
                            </Stack>
                        </Card>
                    </Grid.Col>

                    {/* Standard */}
                    <Grid.Col span={{ base: 12, xs: 4 }} style={{ marginBottom: 8 }}>
                        <Card shadow="md" padding="xl" radius="md" h="100%" withBorder
                            style={{ transform: 'scale(1.05)', borderColor: 'var(--mantine-color-green-6)' }}>
                            <Stack gap="lg" h="100%">
                                <Stack gap="sm" align="center">
                                    <Badge color="green" size="lg" variant="filled">
                                        Most Popular
                                    </Badge>
                                    <ThemeIcon size="xl" color="green" radius="md">
                                        <IconStar size={28} />
                                    </ThemeIcon>
                                    <Title order={3} ta="center">EZee Gamer</Title>
                                    <Text ta="center" c="dimmed">Best value for EZee Gamers</Text>
                                </Stack>

                                <Stack gap="xs" align="center">
                                    <Group gap="xs" align="baseline">
                                        <Text size="2rem" fw={700} c="primary">$30</Text>
                                        {/* <Text c="dimmed">/3 months</Text> */}
                                    </Group>
                                    <Text size="sm" c="dimmed">1 Month Sub</Text>
                                </Stack>

                                <Center>
                                    <List spacing="sm" size="sm" center icon={
                                        <ThemeIcon color="green" size={20} radius="xl">
                                            <IconCheck size={12} />
                                        </ThemeIcon>
                                    }>
                                        <List.Item>Everything in Newby</List.Item>
                                        <List.Item>Full-Auto mode</List.Item>
                                        <List.Item>Beta feature access</List.Item>
                                        <List.Item>Discord support</List.Item>
                                    </List>
                                </Center>

                                <Button className="mantineButtonDefaultColor" size="lg" color="green" mt="auto">
                                    Choose Standard
                                </Button>
                            </Stack>
                        </Card>
                    </Grid.Col>

                    {/* Premium */}
                    <Grid.Col span={{ base: 12, xs: 4 }}>
                        <Card shadow="sm" padding="xl" radius="md" h="100%" withBorder>
                            <Stack gap="lg" h="100%">
                                <Stack gap="sm" align="center">
                                    <ThemeIcon size="xl" color="orange" radius="md">
                                        <IconCrown size={28} />
                                    </ThemeIcon>
                                    <Title order={3} ta="center">Tryhard</Title>
                                    <Text ta="center" c="dimmed">Hardware-Enabled exclusive sub for Serious Gamers</Text>
                                </Stack>

                                <Stack gap="xs" align="center">
                                    <Group gap="xs" align="baseline">
                                        <Text size="2rem" fw={700} c="primary">$99</Text>
                                    </Group>
                                    <Text size="sm" c="orange">1 Month Premium Sub</Text>
                                </Stack>

                                <Center>
                                    <List spacing="sm" size="sm" center icon={
                                        <ThemeIcon color="orange" size={20} radius="xl">
                                            <IconCheck size={12} />
                                        </ThemeIcon>
                                    }>
                                        <List.Item>Everything in EZee Gamer</List.Item>
                                        <List.Item>QMK-VIA mode</List.Item>
                                        <List.Item>QMK-VIA setup walkthrough</List.Item>
                                        <List.Item>Exclusive community role</List.Item>
                                        <List.Item>VIP support channel</List.Item>
                                    </List>
                                </Center>

                                <Button className="mantineButtonDefaultColor" size="lg" color="orange" mt="auto">
                                    Go Full Tryhard
                                </Button>
                            </Stack>
                        </Card>
                    </Grid.Col>
                </Grid>
            </Container>


        </Stack>
    );
};

export default Pricing;