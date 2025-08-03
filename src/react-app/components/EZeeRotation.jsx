import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ActionIcon, Image, Card, Text, Badge, Group, Stack, Box, Alert, Loader, Title, Select, useMantineColorScheme, Tooltip, Container, Button, List, ThemeIcon, Grid, SimpleGrid, Center, Divider } from '@mantine/core';
import { IconChevronLeft, IconChevronRight, IconFolder, IconSwords, IconRocket, IconShield, IconCpu, IconSettings, IconDownload, IconRefresh, IconEye, IconBrain, IconFingerprint, IconCheck, IconStar, IconBolt, IconTarget } from '@tabler/icons-react';

const EZeeRotation = () => {
    const navigate = useNavigate();
    const [currentUIIndex, setCurrentUIIndex] = useState(0);

    const uiScreenshots = [
        {
            image: "./images/ezr_dashboard.png",
            title: "Live Dashboard",
            description: "The main dashboard where you view real-time status, detected color, interpreted abilities, and monitor performance metrics."
        },
        {
            image: "./images/ezr_install.png",
            title: "Auto Install & Setup",
            description: "Install the EZee AddOn and necessary LUA scripts to go along with other rotation AddOns such as Hekili."
        },
        {
            image: "./images/ezr_config.png",
            title: "Configuration",
            description: "Set your toggle key, customize sound effects, and action settings for how abilities are executed."
        },
        {
            image: "./images/ezr_keybinds_1.png",
            title: "Detected Keybinds",
            description: "View and manage all detected keybinds for your abilities."
        },
        {
            image: "./images/ezr_keybinds_2.png",
            title: "Suggested Overrides",
            description: "View and apply suggested keybind overrides for optimal performance."
        },
        {
            image: "./images/ezr_antiban.png",
            title: "Anti-Ban Randomization",
            description: "Adjust anti-ban randomization to minimize detection risk."
        }
    ];

    const handleUIPrevious = () => {
        setCurrentUIIndex((prev) => (prev - 1 + uiScreenshots.length) % uiScreenshots.length);
    };

    const handleUINext = () => {
        setCurrentUIIndex((prev) => (prev + 1) % uiScreenshots.length);
    };

    const currentUI = uiScreenshots[currentUIIndex];
    return (
        <Stack gap="xl" className="container-vertical">
            {/* Hero Section */}
            <Container size="xl" py="xl">
                <Center>
                    <Stack align="center" gap="xl">
                        <Title order={1} size="h1" ta="center" c="primary">
                            EZee Rotation
                        </Title>
                        <Text size="xl" ta="center" c="dimmed" maw={800}>
                            A novel rotation bot featuring revolutionary
                            QMK-VIA hardware-enabled technology.<br />
                            Professional, undetectable, and effortless.
                        </Text>
                    </Stack>
                </Center>
            </Container>

            <Divider />

            {/* Auto Rotation Modes */}
            <Container size="900" style={{ width: "100%" }}>
                <Stack gap="xl">
                    <Title order={2} ta="center">
                        Rotation Modes
                    </Title>

                    <Grid>
                        <Grid.Col span={{ base: 12, xs: 4 }}>
                            <Card shadow="sm" padding="lg" radius="md" h="100%">
                                <Stack gap="md" align="center" ta="center">
                                    <ThemeIcon size="xl" radius="md" color="blue">
                                        <IconTarget size={24} />
                                    </ThemeIcon>
                                    <Title order={3}>One-Button Mode</Title>
                                    <Text size="sm" c="dimmed">
                                        Just like the native rotation helper, but without GCD delays!
                                        Perfect for players who want minimal assistance.
                                    </Text>
                                </Stack>
                            </Card>
                        </Grid.Col>

                        <Grid.Col span={{ base: 12, xs: 4 }}>
                            <Card shadow="sm" padding="lg" radius="md" h="100%">
                                <Stack gap="md" align="center" ta="center">
                                    <ThemeIcon size="xl" radius="md" color="green">
                                        <IconBolt size={24} />
                                    </ThemeIcon>
                                    <Title order={3}>Full-Auto Mode</Title>
                                    <Text size="sm" c="dimmed">
                                        Completely automated rotations requiring no input.
                                        Sit back and watch optimal DPS unfold.
                                    </Text>
                                </Stack>
                            </Card>
                        </Grid.Col>

                        <Grid.Col span={{ base: 12, xs: 4 }}>
                            <Card shadow="sm" padding="lg" radius="md" h="100%">
                                <Stack gap="md" align="center" ta="center">
                                    <ThemeIcon size="xl" radius="md" color="orange">
                                        <IconCpu size={24} />
                                    </ThemeIcon>
                                    <Title order={3}>QMK-VIA Mode</Title>
                                    <Text size="sm" c="dimmed">
                                        Revolutionary hardware-enabled rotation mode.
                                        Novel technology that's completely undetectable.
                                    </Text>
                                    <Badge color="orange" variant="light">
                                        Cutting Edge
                                    </Badge>
                                </Stack>
                            </Card>
                        </Grid.Col>
                    </Grid>

                    <Card shadow="sm" padding="xl" radius="md" h="100%">
                        <Stack gap="md" align="center" ta="center">
                            <ThemeIcon size="xl" radius="md" color="blue">
                                <IconFolder size={24} />
                            </ThemeIcon>
                            <Title order={3}>Rotation AddOns</Title>
                            <Text size="sm" c="dimmed">
                                Utilize your choise of rotation AddOns to enhance your gameplay.
                            </Text>
                            <List size="sm" c="dimmed" ta="left" icon={
                                <ThemeIcon color="blue" size={16} radius="xl">
                                    <IconCheck size={12} />
                                </ThemeIcon>
                            }>
                                <List.Item>Hekili Rotation AddOn</List.Item>
                                <List.Item>Blizard Native Rotation Helper</List.Item>
                            </List>
                        </Stack>
                    </Card>
                </Stack>
            </Container>

            {/* Key Features */}
            <Container size="900" style={{ width: "100%" }}>
                <Stack gap="xl">
                    <Title order={2} ta="center">
                        Safety and Performance
                    </Title>

                    <Grid>
                        <Grid.Col span={{ base: 12, xs: 6 }}>
                            <Card shadow="sm" padding="xl" radius="md" h="100%">
                                <Stack gap="md" align="center" ta="center">
                                    <ThemeIcon size="xl" radius="md" color="green">
                                        <IconEye size={24} />
                                    </ThemeIcon>
                                    <Title order={3}>Pixel-Based Detection</Title>
                                    <Text size="sm" c="dimmed">
                                        No injection required! Uses advanced pixel detection to read
                                        abilities and cooldowns without touching game memory or processes.
                                    </Text>
                                    <List size="sm" c="dimmed" ta="left" icon={
                                        <ThemeIcon color="green" size={16} radius="xl">
                                            <IconCheck size={12} />
                                        </ThemeIcon>
                                    }>
                                        <List.Item>No memory modification</List.Item>
                                        <List.Item>No process injection</List.Item>
                                        <List.Item>Completely external operation</List.Item>
                                    </List>
                                </Stack>
                            </Card>
                        </Grid.Col>

                        <Grid.Col span={{ base: 12, xs: 6 }}>
                            <Card shadow="sm" padding="xl" radius="md" h="100%">
                                <Stack gap="md" align="center" ta="center">
                                    <ThemeIcon size="xl" radius="md" color="orange">
                                        <IconFingerprint size={24} />
                                    </ThemeIcon>
                                    <Title order={3}>Anti-Ban Protection</Title>
                                    <Text size="sm" c="dimmed">
                                        Advanced randomization creates a unique signature for each user,
                                        making detection virtually impossible.
                                    </Text>
                                    <List size="sm" c="dimmed" ta="left" icon={
                                        <ThemeIcon color="orange" size={16} radius="xl">
                                            <IconCheck size={12} />
                                        </ThemeIcon>
                                    }>
                                        <List.Item>Unique user signatures</List.Item>
                                        <List.Item>Timing randomization</List.Item>
                                        <List.Item>Human-like patterns</List.Item>
                                    </List>
                                </Stack>
                            </Card>
                        </Grid.Col>
                    </Grid>
                </Stack>
            </Container>

            {/* User Experience Features */}
            <Container size="900" style={{ width: "100%" }}>
                <Stack gap="xl">
                    <Title order={2} ta="center">
                        Professional Experience
                    </Title>

                    <Grid>
                        <Grid.Col span={{ base: 12, xs: 4 }}>
                            <Card shadow="sm" padding="lg" radius="md" h="100%">
                                <Stack gap="md" align="center" ta="center">
                                    <ThemeIcon size="xl" color="blue" radius="md">
                                        <IconDownload size={24} />
                                    </ThemeIcon>
                                    <Title order={3}>Auto Install</Title>
                                    <Text size="sm" c="dimmed">
                                        One-click installation process designed for simplicity.
                                        No technical knowledge required - just download and run.
                                    </Text>
                                </Stack>
                            </Card>
                        </Grid.Col>

                        <Grid.Col span={{ base: 12, xs: 4 }}>
                            <Card shadow="sm" padding="lg" radius="md" h="100%">
                                <Stack gap="md" align="center" ta="center">
                                    <ThemeIcon size="xl" color="violet" radius="md">
                                        <IconRefresh size={24} />
                                    </ThemeIcon>
                                    <Title order={3}>Auto Update</Title>
                                    <Text size="sm" c="dimmed">
                                        Automatic updates ensure you always have the latest features,
                                        bug fixes, and security improvements without any manual work.
                                    </Text>
                                </Stack>
                            </Card>
                        </Grid.Col>

                        <Grid.Col span={{ base: 12, xs: 4 }}>
                            <Card shadow="sm" padding="lg" radius="md" h="100%">
                                <Stack gap="md" align="center" ta="center">
                                    <ThemeIcon size="xl" color="teal" radius="md">
                                        <IconSettings size={24} />
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

            {/* User Interface */}
            <Container size="900" style={{ width: "100%" }}>
                <Stack gap="xl">
                    <Title order={2} ta="center">
                        User Interface
                    </Title>
                    <Card shadow="sm" padding="xl" radius="md">
                        <Group justify="space-between" mb="xs">
                                {/* Left Chevron */}
                                <ActionIcon
                                    size="xl"
                                    variant="filled"
                                    color="gray"
                                    onClick={handleUIPrevious}
                                    style={{ alignSelf: 'center' }}
                                >
                                    <IconChevronLeft size={32} />
                                </ActionIcon>
                                {/* Right Chevron */}
                                <ActionIcon
                                    size="xl"
                                    variant="filled"
                                    color="gray"
                                    onClick={handleUINext}
                                    style={{ alignSelf: 'center' }}
                                >
                                    <IconChevronRight size={32} />
                                </ActionIcon>
                            </Group>
                        <Stack gap="md" align="center" ta="center">
                            
                            <Title order={3}>{currentUI.title}</Title>
                            <Image
                                src={currentUI.image}
                                alt={currentUI.title}
                                style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
                            />
                            <Text size="sm" c="dimmed" maw={600}>
                                {currentUI.description}
                            </Text>
                            {/* UI Indicators */}
                            <Center mt="md">
                                <Group gap="xs">
                                    {uiScreenshots.map((_, index) => (
                                        <ActionIcon
                                            key={index}
                                            size="xs"
                                            variant={index === currentUIIndex ? "filled" : "outline"}
                                            onClick={() => setCurrentUIIndex(index)}
                                            style={{ borderRadius: '50%' }}
                                        >
                                            <Box w={6} h={6} style={{ borderRadius: '50%' }} />
                                        </ActionIcon>
                                    ))}
                                </Group>
                            </Center>
                        </Stack>
                    </Card>
                </Stack>
            </Container>

            {/* Call to Action */}
            <Container size="900" style={{ width: '100%' }}>
                <Stack gap="xl">
                    <Title order={2} ta="center">
                        Ready to Transform Your Gameplay?
                    </Title>

                    <SimpleGrid cols={1}>
                        <Card className="mantineCardHighlight" shadow="md" padding="xl" radius="md" style={{ textAlign: 'center' }} h="100%">
                            <Stack gap="lg">
                                <Title className="mantineTextHighlight" order={3}>Download & Install Now!</Title>
                                <Group justify="center" gap="md">
                                    <Button 
                                        className="mantineButtonHighlight" 
                                        size="lg" 
                                        rightSection={<IconDownload size={18} />}
                                        onClick={() => navigate('/pricing')}
                                    >
                                        Get EZee Rotation
                                    </Button>
                                    <Button 
                                        className="mantineButtonHighlightOutline" 
                                        size="lg"
                                        onClick={() => navigate('/pricing')}
                                    >
                                        View Pricing
                                    </Button>
                                </Group>
                                <Text className="mantineTextHighlight" size="sm">
                                    Become an EZee Gamer today.
                                </Text>
                            </Stack>
                        </Card>
                    </SimpleGrid>
                </Stack>
            </Container>

        </Stack>
    );
};

export default EZeeRotation;