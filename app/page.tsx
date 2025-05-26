import { Github, Linkedin, Mail, ExternalLink, Download, Code, Palette, Smartphone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  const projects = [
    {
      title: "Web Spotify Clone",
      description:
        "A full-stack Spotify website built with Reacjs, Aws. python, featuring user authentication, playlist, and  admin management.",
      image: "/spotify.png?height=200&width=300",
      technologies: ["Next.js", "JavaScript", "reactJS", "Aws", "Python", "Django", "PostgreSQL"],
      github: "https://github.com/sieunguyen28/Website_Spotify",
      demo: "https://your-ecommerce-demo.vercel.app",
    },
    {
      title: "Book e-commerce",
      description:
        "A full-stack e-commerce website built with .Net, featuring user authentication, product management, and a secure payment system.",
      image: "/book.jpg?height=200&width=300",
      technologies: [".Net", "CSS", "C#", "JavaScript", "HTML", "SQL Server"],  
      github: "https://github.com/NVTines/Book_Ecommerce  ",
      demo: "https://your-task-manager.vercel.app",
    },
    {
      title: "Booking Train",
      description:
        "A Booking train website built with JavaSping Boost, featuring user authentication, ticket management, and a secure payment system.",
      image: "/BK.png?height=200&width=300",
      technologies: ["Java SpingBoost", "JavaScript", "My SQL", "HTML", "CSS"],
      github: "",
      demo: "https://your-weather-app.vercel.app",
    },
  ]

  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "JavaSpring Boost"] },
    { category: "Backend", items: [ "Python", "Django", "PostgreSQL","PHP" ] },
    { category: "Tools & Others", items: ["Git", "Docker", "AWS", "Figma"] },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block">Your Name</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#about">About</Link>
              <Link href="#projects">Projects</Link>
              <Link href="#skills">Skills</Link>
              <Link href="#contact">Contact</Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <Button variant="outline" size="sm" asChild>
                <Link href="/resume.pdf" target="_blank">
                  <Download className="mr-2 h-4 w-4" />
                  Resume
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container flex min-h-[80vh] items-center justify-center py-12">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
               Nguyen Thanh Long
              </span>
            </h1>
            <p className="mx-auto max-w-[700px] text-lg text-muted-foreground sm:text-xl">
              Full Stack Developer passionate about creating beautiful, functional, and user-centered digital
              experiences.
            </p>
          </div>
          <div className="flex space-x-4">
            <Button asChild>
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="#contact">Get In Touch</Link>
            </Button>
          </div>
          <div className="flex space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/NguyenLong03126" target="_blank">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://www.linkedin.com/in/long-nguy%E1%BB%85n-56835b368/" target="_blank">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="Mailto:nguyenlong22357@gmail.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-3xl font-bold tracking-tighter text-center">About Me</h2>
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-4">
              <p className="text-muted-foreground">
                I'm a passionate full-stack developer with over 3 years of experience creating web applications that
                solve real-world problems. I love working with modern technologies and am always eager to learn new
                tools and frameworks.
              </p>
              <p className="text-muted-foreground">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or sharing my knowledge through blog posts and community involvement.
              </p>
              <div className="flex space-x-4">
                <div className="flex items-center space-x-2">
                  <Code className="h-5 w-5 text-blue-600" />
                  <span className="text-sm">Clean Code</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Palette className="h-5 w-5 text-purple-600" />
                  <span className="text-sm">UI/UX Design</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Smartphone className="h-5 w-5 text-green-600" />
                  <span className="text-sm">Responsive</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/avtLong.jpg?"
                alt="Profile"
                width={300}
                height={300}
                className="rounded-full border-4 border-border"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container py-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-3xl font-bold tracking-tighter text-center">Featured Projects</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {project.title}
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="icon" asChild>
                        <Link href={project.github} target="_blank">
                          <Github className="h-4 w-4" />
                          <span className="sr-only">GitHub</span>
                        </Link>
                      </Button>
                      <Button variant="ghost" size="icon" asChild>
                        <Link href={project.demo} target="_blank">
                          <ExternalLink className="h-4 w-4" />
                          <span className="sr-only">Demo</span>
                        </Link>
                      </Button>
                    </div>
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-3xl font-bold tracking-tighter text-center">Skills & Technologies</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {skills.map((skillGroup) => (
              <Card key={skillGroup.category}>
                <CardHeader>
                  <CardTitle className="text-center">{skillGroup.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {skillGroup.items.map((skill) => (
                      <Badge key={skill} variant="outline">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container py-12">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-8 text-3xl font-bold tracking-tighter">Get In Touch</h2>
          <p className="mb-8 text-muted-foreground">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about
            technology.
          </p>
          <div className="flex justify-center space-x-4">
            <Button asChild>
              <Link href="mailto:nguyenlong22356@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Send Email
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="https://www.linkedin.com/in/long-nguy%E1%BB%85n-56835b368/" target="_blank">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6">
        <div className="container flex items-center justify-between">
          <p className="text-sm text-muted-foreground">© 2024 Nguyen Long. All rights reserved.</p>
          <div className="flex space-x-4">
            <Link href="https://github.com/NguyenLong03126" className="text-muted-foreground hover:text-foreground">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://www.linkedin.com/in/long-nguy%E1%BB%85n-56835b368/" className="text-muted-foreground hover:text-foreground">
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
