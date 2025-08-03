import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { ActionIcon, Button, SimpleGrid, Card, Text, Badge, Group, Stack, Box, Alert, Loader, Title, Select, useMantineColorScheme, Tooltip, Container, Grid, Image, Center, Divider, Avatar, Rating, Timeline, ThemeIcon } from '@mantine/core';
import { IconChevronLeft, IconChevronRight, IconDownload, IconTrophy, IconStar, IconQuote, IconChartBar, IconSwords, IconTarget, IconFlame, IconCrown, IconMedal, IconUser } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';

const Accolades = () => {
    const navigate = useNavigate();
    const achievements = [
        {
            key: 'mythic_keystones',
            title: "Mythic+ Keystones",
            description: "Effortless +15 Keys",
            score: "3-Chest Clear",
            type: "dungeon",
            color: "purple"
        },
        {
            key: 'raids',
            title: "Raids",
            description: "Mythic Raid Capable",
            score: "AoTC + CE",
            type: "raid",
            color: "gold"
        }
    ];

    const [currentParseIndex, setCurrentParseIndex] = useState(0);

    const parseScreenshots = [
        {
            key: 'dragonflight_season_1',
            image: "./images/ezr_showcase_parses_1.png",
            title: "Dragonflight Season 1",
            description: "Vault of the Incarnates HC - 97.8% Average Parse - AoTC Cleared",
        },
        {
            key: 'the_war_within_season_1',
            image: "./images/ezr_showcase_parses_2.png",
            title: "The War Within Season 1",
            description: "Nerub-ar Palace HC - 97.7% Average Parse - AoTC Cleared"
        },
        {
            key: 'the_war_within_season_2',
            image: "./images/ezr_showcase_parses_3.png",
            title: "The War Within Season 2",
            description: "Liberation of Undermine HC - 97.9% Average Parse - AoTC Cleared"
        },
    ];

    const handleParsePrevious = () => {
        setCurrentParseIndex((prev) => (prev - 1 + parseScreenshots.length) % parseScreenshots.length);
    };

    const handleParseNext = () => {
        setCurrentParseIndex((prev) => (prev + 1) % parseScreenshots.length);
    };

    const currentParse = parseScreenshots[currentParseIndex];

    return (
        <Stack gap="xl" className="container-vertical">
            {/* Hero Section */}
            <Container size="900" style={{ width: "100%" }} py="xl">
                <Center>
                    <Stack align="center" gap="lg">
                        <Title order={1} size="h1" ta="center" c="primary">
                            Showcase
                        </Title>
                        <Text size="xl" ta="center" c="dimmed" maw={700}>
                            EZee Gamers, EZee Dubs.
                        </Text>
                    </Stack>
                </Center>
            </Container>

            <Divider />

            {/* Achievement Showcase */}
            <Container size="900" style={{ width: "100%" }}>
                <Stack gap="xl">
                    <Title order={2} ta="center">
                        Pro-level Performance
                    </Title>

                    <Grid>
                        {achievements.map((achievement, index) => (
                            <Grid.Col key={achievement.key} span={{ base: 12, xs: 6 }}>
                                <Card shadow="md" padding="lg" radius="md" h="100%">
                                    <Stack gap="md" align="center" ta="center">
                                        <ThemeIcon size="xl" color={achievement.color} radius="md">
                                            {achievement.type === 'raid' && <IconSwords size={24} />}
                                            {achievement.type === 'dungeon' && <IconTarget size={24} />}
                                            {achievement.type === 'pvp' && <IconFlame size={24} />}
                                        </ThemeIcon>
                                        <Stack gap="xs" align="center" ta="center">
                                            <Title order={4}>{achievement.title}</Title>
                                            <Text size="sm" c="dimmed">{achievement.description}</Text>
                                            <Badge color={achievement.color} variant="light" size="lg">
                                                {achievement.score}
                                            </Badge>
                                        </Stack>
                                    </Stack>
                                </Card>
                            </Grid.Col>
                        ))}
                    </Grid>
                </Stack>
            </Container>

            {/* Performance Stats */}
            <Container size="900" style={{ width: "100%" }}>
                <Card shadow="md" padding="xl" radius="md">
                    <Stack gap="lg">
                        <Title order={2} ta="center">
                            Performance Statistics
                        </Title>
                        <SimpleGrid cols={3}>
                            <Stack gap="xs" align="center">
                                <ThemeIcon size="xl" color="blue" radius="md">
                                    <IconChartBar size={24} />
                                </ThemeIcon>
                                <Text size="xl" fw={700} c="primary">95%+</Text>
                                <Text size="sm" c="dimmed" ta="center">Average Parse Percentile</Text>
                            </Stack>
                            <Stack gap="xs" align="center">
                                <ThemeIcon size="xl" color="green" radius="md">
                                    <IconTarget size={24} />
                                </ThemeIcon>
                                <Text size="xl" fw={700} c="primary">+50%</Text>
                                <Text size="sm" c="dimmed" ta="center">DPS Improvement</Text>
                            </Stack>
                            <Stack gap="xs" align="center">
                                <ThemeIcon size="xl" color="orange" radius="md">
                                    <IconCrown size={24} />
                                </ThemeIcon>
                                <Text size="xl" fw={700} c="primary">99%</Text>
                                <Text size="sm" c="dimmed" ta="center">DPS Uptime</Text>
                            </Stack>
                        </SimpleGrid>
                    </Stack>
                </Card>
            </Container>

            {/* Parses */}
            <Container size="900" style={{ width: "100%" }}>
                <Stack gap="xl">
                    <Title order={2} ta="center">
                        Top Performers
                    </Title>
                    <Card shadow="sm" padding="xl" radius="md">
                        <Group justify="space-between" align="center" mb="md">
                            {/* Left Chevron */}
                            <ActionIcon
                                size="xl"
                                variant="filled"
                                color="gray"
                                onClick={handleParsePrevious}
                                style={{ alignSelf: 'center' }}
                            >
                                <IconChevronLeft size={32} />
                            </ActionIcon>
                            {/* Right Chevron */}
                            <ActionIcon
                                size="xl"
                                variant="filled"
                                color="gray"
                                onClick={handleParseNext}
                                style={{ alignSelf: 'center' }}
                            >
                                <IconChevronRight size={32} />
                            </ActionIcon>
                        </Group>
                        <Stack gap="md" align="center" ta="center">
                            <Title order={3}>{currentParse.title}</Title>

                            <Image
                                src={currentParse.image}
                                alt={currentParse.title}
                                style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
                            />
                            <Text size="sm" c="dimmed" maw={600}>
                                {currentParse.description}
                            </Text>
                            {/* UI Indicators */}
                            <Center mt="md">
                                <Group gap="xs">
                                    {parseScreenshots.map((_, index) => (
                                        <ActionIcon
                                            key={index}
                                            size="xs"
                                            variant={index === currentParseIndex ? "filled" : "outline"}
                                            onClick={() => setCurrentParseIndex(index)}
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
                        It's Time to Parse
                    </Title>

                    <SimpleGrid cols={1}>
                        <Card className="mantineCardHighlight" shadow="md" padding="xl" radius="md" style={{ textAlign: 'center' }} h="100%">
                            <Stack gap="lg">
                                <Title className="mantineTextHighlight" order={3}>Download & Install Now!</Title>
                                <Group justify="center" gap="md">
                                    <Button onClick={() => navigate('/pricing')} className="mantineButtonHighlight" size="lg" rightSection={<IconDownload size={18} />}>
                                        Get EZee Rotation
                                    </Button>
                                    <Button onClick={() => navigate('/pricing')} className="mantineButtonHighlightOutline" size="lg">
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

export default Accolades;