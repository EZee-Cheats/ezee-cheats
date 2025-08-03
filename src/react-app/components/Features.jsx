import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Card, Text, Badge, Group, Stack, Box, Alert, Loader, Title, Select, useMantineColorScheme, Tooltip, Container, Grid, ThemeIcon, List, Divider, Center } from '@mantine/core';
import { IconTrendingUp, IconStar, IconEye, IconFingerprint, IconDownload, IconRefresh, IconSettings, IconShield, IconCpu, IconBrain, IconBolt, IconTarget, IconCheck } from '@tabler/icons-react';

const Features = () => {
    return (
        <Stack gap="xl" className="container-vertical">
            {/* Hero Section */}
            <Container size="lg" py="xl">
                <Center>
                    <Stack align="center" gap="lg">
                        <ThemeIcon size="xl" color="red" radius="md">
                            <IconStar size={32} />
                        </ThemeIcon>
                        <Title order={1} size="h1" ta="center" c="primary">
                            Powerful Features
                        </Title>
                        <Text size="xl" ta="center" c="dimmed" maw={700}>
                            Advanced technology and professional features that set EZee Cheats apart
                            from the competition. Built for serious players who demand the best.
                        </Text>
                    </Stack>
                </Center>
            </Container>

            <Divider />

            {/* Core Features */}
            <Container size="lg">
                <Stack gap="xl">
                    <Title order={2} ta="center">
                        Core Technology
                    </Title>

                    <Grid>
                        <Grid.Col span={{ base: 12, md: 6 }}>
                            <Card shadow="md" padding="xl" radius="md" h="100%">
                                <Stack gap="lg">
                                    <Group>
                                        <ThemeIcon size="xl" color="green" radius="md">
                                            <IconEye size={28} />
                                        </ThemeIcon>
                                        <Title order={3}>Pixel-Based Detection</Title>
                                    </Group>
                                    <Text>
                                        All EZee bots use advanced pixel-based detection rather than
                                        game injection. This external approach makes them significantly
                                        harder to detect and safer to use.
                                    </Text>
                                    <List spacing="sm" size="sm" center icon={
                                        <ThemeIcon color="green" size={20} radius="xl">
                                            <IconCheck size={12} />
                                        </ThemeIcon>
                                    }>
                                        <List.Item>No game client injection</List.Item>
                                        <List.Item>No memory modification</List.Item>
                                        <List.Item>External process operation</List.Item>
                                        <List.Item>Advanced image recognition</List.Item>
                                    </List>
                                </Stack>
                            </Card>
                        </Grid.Col>

                        <Grid.Col span={{ base: 12, md: 6 }}>
                            <Card shadow="md" padding="xl" radius="md" h="100%">
                                <Stack gap="lg">
                                    <Group>
                                        <ThemeIcon size="xl" color="orange" radius="md">
                                            <IconFingerprint size={28} />
                                        </ThemeIcon>
                                        <Title order={3}>Anti-Ban Protection</Title>
                                    </Group>
                                    <Text>
                                        Each user receives a unique behavioral signature with advanced
                                        randomization patterns. Heuristic detection becomes nearly
                                        impossible with our sophisticated anti-detection measures.
                                    </Text>
                                    <List spacing="sm" size="sm" center icon={
                                        <ThemeIcon color="orange" size={20} radius="xl">
                                            <IconCheck size={12} />
                                        </ThemeIcon>
                                    }>
                                        <List.Item>Unique user signatures</List.Item>
                                        <List.Item>Advanced timing randomization</List.Item>
                                        <List.Item>Human-like behavior patterns</List.Item>
                                        <List.Item>Dynamic pattern evolution</List.Item>
                                    </List>
                                </Stack>
                            </Card>
                        </Grid.Col>
                    </Grid>
                </Stack>
            </Container>

            {/* User Experience Features */}
            <Container size="lg">
                <Stack gap="xl">
                    <Title order={2} ta="center">
                        Professional Experience
                    </Title>

                    <Grid>
                        <Grid.Col span={{ base: 12, md: 4 }}>
                            <Card shadow="sm" padding="lg" radius="md" h="100%">
                                <Stack gap="md" align="center" ta="center">
                                    <ThemeIcon size="xl" color="blue" radius="md">
                                        <IconDownload size={28} />
                                    </ThemeIcon>
                                    <Title order={3}>Auto Install</Title>
                                    <Text size="sm" c="dimmed">
                                        One-click installation process designed for simplicity.
                                        No technical knowledge required - just download and run.
                                    </Text>
                                </Stack>
                            </Card>
                        </Grid.Col>

                        <Grid.Col span={{ base: 12, md: 4 }}>
                            <Card shadow="sm" padding="lg" radius="md" h="100%">
                                <Stack gap="md" align="center" ta="center">
                                    <ThemeIcon size="xl" color="violet" radius="md">
                                        <IconRefresh size={28} />
                                    </ThemeIcon>
                                    <Title order={3}>Auto Update</Title>
                                    <Text size="sm" c="dimmed">
                                        Automatic updates ensure you always have the latest features,
                                        bug fixes, and security improvements without any manual work.
                                    </Text>
                                </Stack>
                            </Card>
                        </Grid.Col>

                        <Grid.Col span={{ base: 12, md: 4 }}>
                            <Card shadow="sm" padding="lg" radius="md" h="100%">
                                <Stack gap="md" align="center" ta="center">
                                    <ThemeIcon size="xl" color="teal" radius="md">
                                        <IconSettings size={28} />
                                    </ThemeIcon>
                                    <Title order={3}>Fully Customizable</Title>
                                    <Text size="sm" c="dimmed">
                                        Extensive customization options allow you to tailor every
                                        aspect to your specific playstyle and preferences.
                                    </Text>
                                </Stack>
                            </Card>
                        </Grid.Col>
                    </Grid>
                </Stack>
            </Container>

            {/* Advanced Features */}
            <Container size="lg">
                <Stack gap="xl">
                    <Title order={2} ta="center">
                        Advanced Capabilities
                    </Title>

                    <Grid>
                        <Grid.Col span={{ base: 12, md: 6 }}>
                            <Card shadow="sm" padding="lg" radius="md" h="100%">
                                <Stack gap="md">
                                    <Group>
                                        <ThemeIcon size="lg" color="blue">
                                            <IconCpu size={20} />
                                        </ThemeIcon>
                                        <Title order={4}>Hardware Integration</Title>
                                    </Group>
                                    <Text size="sm">
                                        Revolutionary QMK-VIA hardware integration provides
                                        unprecedented automation capabilities through keyboard firmware.
                                    </Text>
                                </Stack>
                            </Card>
                        </Grid.Col>

                        <Grid.Col span={{ base: 12, md: 6 }}>
                            <Card shadow="sm" padding="lg" radius="md" h="100%">
                                <Stack gap="md">
                                    <Group>
                                        <ThemeIcon size="lg" color="green">
                                            <IconBrain size={20} />
                                        </ThemeIcon>
                                        <Title order={4}>Smart Algorithms</Title>
                                    </Group>
                                    <Text size="sm">
                                        AI-powered decision making adapts to game state changes
                                        and optimizes performance in real-time.
                                    </Text>
                                </Stack>
                            </Card>
                        </Grid.Col>

                        <Grid.Col span={{ base: 12, md: 6 }}>
                            <Card shadow="sm" padding="lg" radius="md" h="100%">
                                <Stack gap="md">
                                    <Group>
                                        <ThemeIcon size="lg" color="orange">
                                            <IconBolt size={20} />
                                        </ThemeIcon>
                                        <Title order={4}>Performance Optimization</Title>
                                    </Group>
                                    <Text size="sm">
                                        Minimal system impact with optimized algorithms
                                        that maintain high performance during gameplay.
                                    </Text>
                                </Stack>
                            </Card>
                        </Grid.Col>

                        <Grid.Col span={{ base: 12, md: 6 }}>
                            <Card shadow="sm" padding="lg" radius="md" h="100%">
                                <Stack gap="md">
                                    <Group>
                                        <ThemeIcon size="lg" color="violet">
                                            <IconShield size={20} />
                                        </ThemeIcon>
                                        <Title order={4}>Security First</Title>
                                    </Group>
                                    <Text size="sm">
                                        Built with security as a priority, featuring encrypted
                                        communications and secure update mechanisms.
                                    </Text>
                                </Stack>
                            </Card>
                        </Grid.Col>
                    </Grid>
                </Stack>
            </Container>

            {/* Why Choose Us */}
            <Container size="lg">
                <Card shadow="md" padding="xl" radius="md">
                    <Stack gap="lg" align="center" ta="center">
                        <Title order={2}>Why Choose EZee Cheats?</Title>
                        <Text size="lg" c="dimmed" maw={600}>
                            We combine cutting-edge technology with a deep understanding of what
                            serious players need. Our commitment to safety, performance, and
                            user experience is unmatched.
                        </Text>
                        <Grid mt="md">
                            <Grid.Col span={{ base: 6, md: 3 }}>
                                <Stack gap="xs" align="center">
                                    <Text size="xl" fw={700} c="primary">99.9%</Text>
                                    <Text size="sm" c="dimmed">Uptime</Text>
                                </Stack>
                            </Grid.Col>
                            <Grid.Col span={{ base: 6, md: 3 }}>
                                <Stack gap="xs" align="center">
                                    <Text size="xl" fw={700} c="primary">0</Text>
                                    <Text size="sm" c="dimmed">Detected Bans</Text>
                                </Stack>
                            </Grid.Col>
                            <Grid.Col span={{ base: 6, md: 3 }}>
                                <Stack gap="xs" align="center">
                                    <Text size="xl" fw={700} c="primary">5000+</Text>
                                    <Text size="sm" c="dimmed">Active Users</Text>
                                </Stack>
                            </Grid.Col>
                            <Grid.Col span={{ base: 6, md: 3 }}>
                                <Stack gap="xs" align="center">
                                    <Text size="xl" fw={700} c="primary">24/7</Text>
                                    <Text size="sm" c="dimmed">Support</Text>
                                </Stack>
                            </Grid.Col>
                        </Grid>
                    </Stack>
                </Card>
            </Container>
        </Stack>
    );
};

export default Features;