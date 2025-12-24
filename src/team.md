<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/nullptr-t-oss.png',
    name: '0x-br0k3n',
    title: 'Creator/Developer',
    links: [
      { icon: 'github', link: 'https://github.com/nullptr-t-oss' },
      { icon: 'discord', link: 'https://discordapp.com/users/810058393653084181' }
    ]
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/1234815964856582160/f58808901ec24751c0330256dfe0a39a?size=1024',
    name: 'Dark',
    title: 'Contributor',
    links: [
      { icon: 'discord', link: 'https://discordapp.com/users/1234815964856582160' }
    ]
  }
]
</script>

# Our Team

Say hello to our awesome team.

<VPTeamMembers size="medium" :members />
