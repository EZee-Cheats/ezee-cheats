import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { SimpleGrid, Button, Card, Text, Badge, Group, Stack, Box, Alert, Loader, Title, Select, useMantineColorScheme, Tooltip, Container, Accordion, ThemeIcon, Center, Divider } from '@mantine/core';
import { IconQuestionMark, IconShield, IconDownload, IconBrandDiscord, IconSwords, IconSettings } from '@tabler/icons-react';

const faqData = [
    {
        value: "how-it-works",
        question: "How does EZee Rotation work?",
        icon: IconSettings,
        color: "blue",
        answer: "EZee Rotation uses advanced pixel-based detection to read your game screen and identify abilities, cooldowns, and game states. It then executes optimal rotations based on the chosen mode (One-Button, Full-Auto, or QMK-VIA). Unlike other bots, it doesn't inject into the game client or modify memory, making it much safer and harder to detect."
    },
    {
        value: "class-support",
        question: "What classes and specs does it support?",
        icon: IconSwords,
        color: "green",
        answer: "EZee Rotation supports all classes and specializations for both DPS and tank specs. Since EZee Rotation utilizes the built-in rotation assistant or Hekili, it can easily adapt to any spec or playstyle."
    },
    {
        value: "installation",
        question: "How do I install and uninstall EZee Rotation?",
        icon: IconDownload,
        color: "orange",
        answer: "Installation is simple! After purchasing, you'll receive a download link for the installer executable. Just run the installer and follow the prompts - no technical knowledge required. The installation includes an uninstaller that can be accessed through Windows Programs & Features or by running the uninstall.exe file in your installation directory."
    },
    {
        value: "support",
        question: "How do I get support?",
        icon: IconBrandDiscord,
        color: "violet",
        answer: "Our primary support channel is through our Discord server, where you'll have access to our support team and community of users. Premium subscribers also get access to priority support channels and direct contact with developers. We typically respond within a few hours during business hours."
    },
    {
        value: "safety",
        question: "Is EZee Rotation safe? Will I get banned?",
        icon: IconShield,
        color: "red",
        answer: "Safety is our top priority. EZee Rotation uses pixel-based detection instead of game injection, making it significantly safer than traditional bots. Each user gets a unique behavioral signature with advanced randomization to prevent pattern detection. We've maintained a zero-ban record since launch."
    },
    {
        value: "qmk-via",
        question: "What is QMK-VIA Hardware-Enabled mode?",
        icon: IconSettings,
        color: "teal",
        answer: "QMK-VIA mode is our revolutionary hardware integration feature that works through VIA-compatible keyboards. By programming rotations directly into keyboard firmware using QMK/VIA, inputs appear as genuine hardware keypresses rather than software automation. This method is virtually undetectable and represents the cutting edge of automation technology."
    },
    {
        value: "requirements",
        question: "What are the system requirements?",
        icon: IconSettings,
        color: "cyan",
        answer: "EZee Rotation works on Windows 10 and Windows 11 systems. The game must be in full-screen or borderless windowed mode for optimal pixel detection. The bot has minimal system impact and runs alongside the game without performance issues. For QMK-VIA mode, you'll need a compatible QMK/VIA keyboard."
    },
    {
        value: "updates",
        question: "How do updates work?",
        icon: IconDownload,
        color: "pink",
        answer: "EZee Rotation features automatic updates that keep you current with the latest features, bug fixes, and game patch compatibility. Updates are downloaded and installed automatically in the background, so you never have to worry about manual updates or missing important changes."
    }
];

const Faq = () => {
    return (
        <Stack gap="xl" className="container-vertical">
            {/* Hero Section */}
            <Container size="900" style={{ width: "100%" }} py="xl">
                <Center>
                    <Stack align="center" gap="lg">
                        <Title order={1} size="h1" ta="center" c="primary">
                            Frequently Asked Questions
                        </Title>
                        <Text size="xl" ta="center" c="dimmed" maw={600}>
                            EZee answers to common questions about EZee Rotation and our services.
                        </Text>
                    </Stack>
                </Center>
            </Container>

            <Divider />

            {/* FAQ Accordion */}
            <Container size="900" style={{ width: "100%" }}>
                <Accordion variant="separated" radius="md">
                    {faqData.map((faq) => {
                        const IconComponent = faq.icon;
                        return (
                            <Accordion.Item key={faq.value} value={faq.value}>
                                <Accordion.Control>
                                    <Group grow>
                                        <ThemeIcon color={faq.color} size="sm" radius="xl" style={{ maxWidth: 22 }}>
                                            <IconComponent size={14} />
                                        </ThemeIcon>
                                        <Text fw={500}>{faq.question}</Text>
                                    </Group>
                                </Accordion.Control>
                                <Accordion.Panel>
                                    <Text>
                                        {faq.answer}
                                    </Text>
                                </Accordion.Panel>
                            </Accordion.Item>
                        );
                    })}
                </Accordion>
            </Container>

            {/* Still have questions */}
            <Container size="900" style={{ width: '100%' }}>
                <Stack gap="xl">
                    <SimpleGrid cols={1}>
                        <Card className="mantineCardHighlight" shadow="md" padding="xl" radius="md" style={{ textAlign: 'center' }} h="100%">
                            <Stack gap="lg">
                                <Title className="mantineTextHighlight" order={3}>Still have questions?</Title>
                                <Group justify="center" gap="md">
                                    <Button
                                        className="mantineButtonHighlight"
                                        size="lg"
                                        onClick={() => window.open('https://discord.gg/wTYZHHun', '_blank')}
                                    >
                                        Join Discord
                                    </Button>
                                    <Button
                                        className="mantineButtonHighlightOutline"
                                        size="lg"
                                        onClick={() => window.open('https://discord.gg/wTYZHHun', '_blank')}
                                    >
                                        Contact Support
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

export default Faq;