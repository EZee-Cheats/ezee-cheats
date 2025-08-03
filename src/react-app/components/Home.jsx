import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Card, Text, Badge, Group, Stack, Box, Alert, Loader, Title, Select, useMantineColorScheme, Tooltip, Button, Container, Center, Image, Divider, ThemeIcon, ActionIcon } from '@mantine/core';
import { IconRocket, IconShield, IconCpu, IconTrendingUp, IconStar, IconChevronRight, IconChevronLeft } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [currentProductIndex, setCurrentProductIndex] = useState(0);
    const navigate = useNavigate();

    const products = [
        {
            title: "EZee Rotation",
            subtitle: "Rotations Made EZee",
            description: "The ultimate rotation bot featuring our novel QMK-VIA Hardware-Enabled Rotation Mode. Completely undetectable and professionally crafted for serious players.",
            status: "Available Now",
            statusColor: "green",
            available: true,
            image: "./images/ezr_dashboard.png",
            page: "/ezeerotation",
            features: [
                { icon: IconTrendingUp, text: "Pro Performance", color: "var(--mantine-color-yellow-6)" },
                { icon: IconShield, text: "Anti-Ban", color: "var(--mantine-color-green-6)" },
                { icon: IconCpu, text: "Hardware-Enabled", color: "var(--mantine-color-blue-6)" },
            ]
        },
        {
            title: "EZee Scaping",
            subtitle: "Coming Soon",
            description: "An EZee take on Scaping. Stay tuned for updates.",
            status: "Coming Soon",
            statusColor: "gray",
            available: false,
            image: null,
            page: "/ezeescaping",
            features: []
        }
    ];

    const handlePrevious = () => {
        setCurrentProductIndex((prev) => (prev - 1 + products.length) % products.length);
    };

    const handleNext = () => {
        setCurrentProductIndex((prev) => (prev + 1) % products.length);
    };

    const currentProduct = products[currentProductIndex];
    return (
        <Stack gap="xl" className="container-vertical">
            {/* Hero Section */}
            <Container size="900" style={{ width: '100%' }} py="xl">
                <Center>
                    <Stack align="center" gap="xl">
                        <ThemeIcon size="xl" color="transparent" radius="md">
                            <Image src="./images/ez.png" w={72} />
                        </ThemeIcon>
                        <Title order={1} size="h1" ta="center" c="primary">
                            EZee Cheats
                        </Title>
                        <Text size="xl" ta="center" c="dimmed" maw={600}>
                            Effortless Zero Engagement Engine
                        </Text>
                    </Stack>
                </Center>
            </Container>

            <Divider />

            {/* Product Carousel */}
            <Container size="900" style={{ width: '100%' }} >
                {/* Product Card */}
                <Card
                    padding="xl"
                    radius="md"
                >
                    <Group justify="space-between" align="center" mb="xs">
                        {/* Left Chevron */}
                        <ActionIcon
                            size="xl"
                            variant="filled"
                            color="gray"
                            onClick={handlePrevious}
                            style={{ alignSelf: 'center' }}
                        >
                            <IconChevronLeft size={32} />
                        </ActionIcon>
                        {/* Right Chevron */}
                        <ActionIcon
                            size="xl"
                            variant="filled"
                            color="gray"
                            onClick={handleNext}
                            style={{ alignSelf: 'center' }}
                        >
                            <IconChevronRight size={32} />
                        </ActionIcon>
                    </Group>
                    <Stack gap="lg">
                            
                        <Group justify="space-between" align="flex-start">
                            <Title order={2}>
                                {currentProduct.title}
                            </Title>
                            <Badge
                                size="xl"
                                color={currentProduct.statusColor}
                                variant={currentProduct.available ? "light" : "outline"}
                            >
                                {currentProduct.status}
                            </Badge>
                        </Group>

                        <Stack gap="sm" flex={1}>
                            <Text size="lg" c="dimmed">
                                {currentProduct.subtitle}
                            </Text>
                            <Text>
                                {currentProduct.description}
                            </Text>
                        </Stack>

                        {currentProduct.image && (
                            <Center>
                                <Image
                                    src={currentProduct.image}
                                    alt={`${currentProduct.title} Dashboard`}
                                    style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
                                />
                            </Center>
                        )}

                        {currentProduct.features.length > 0 && (
                            <Group gap="xl">
                                {currentProduct.features.map((feature, index) => (
                                    <Group key={index} gap="xs">
                                        <feature.icon size={20} color={feature.color} />
                                        <Text size="sm">{feature.text}</Text>
                                    </Group>
                                ))}
                            </Group>
                        )}

                        {currentProduct.available && (
                            <Button
                                variant="filled"
                                rightSection={<IconChevronRight size={16} />}
                                onClick={() => navigate(currentProduct.page)}
                            >
                                Learn About {currentProduct.title}
                            </Button>
                        )}
                    </Stack>
                </Card>

                {/* Product Indicators */}
                <Center mt="md">
                    <Group gap="xs">
                        {products.map((_, index) => (
                            <ActionIcon
                                key={index}
                                size="sm"
                                variant={index === currentProductIndex ? "filled" : "outline"}
                                onClick={() => setCurrentProductIndex(index)}
                                style={{ borderRadius: '50%' }}
                            >
                                <Box w={6} h={6} style={{ borderRadius: '50%' }} />
                            </ActionIcon>
                        ))}
                    </Group>
                </Center>
            </Container>

        </Stack>
    );
};

export default Home;