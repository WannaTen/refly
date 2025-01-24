<div align="center">

<h1 align="center" style="border-bottom: none">
    <b>
        <a href="https://www.refly.ai">Refly.AI</a><br>
    </b>
    ⭐️  The AI Native Creation Engine ⭐️ <br>
</h1>

![refly-cover](https://github.com/user-attachments/assets/2930c555-09a7-4ea2-a18a-2b1d8a7ef4ae)

Refly is an open-source AI-native creation engine. It's intuitive free-form canvas interface combines multi-threaded conversations, knowledge base RAG integration, contextual memory, intelligent search, WYSIWYG AI editor and more, empowering you to effortlessly transform ideas into production-ready content.

[🚀 Refly v0.2.3 Released! Featuring Enhanced Product Onboarding!](https://docs.refly.ai/changelog/v0.2.3)

[Refly Cloud](https://refly.ai/)·[Self-hosting](https://refly.ai/)[Forum](https://github.com/refly-ai/refly/discussions)·[Discord](https://discord.gg/bWjffrb89h)·[Twitter](https://x.com/reflyai)·[Documentation](https://docs.refly.ai/)

</div>

## Quick Start

### Local Development

> Before installing ReflyAI, ensure your machine meets these minimum system requirements:
>
> CPU >= 2 cores
>
> Memory >= 4GB

The easiest way to start the ReflyAI server is to run our docker-compose.yml file. Before running the installation commands, make sure Docker and Docker Compose are installed on your machine:

```bash
cd docker
cp .env.example .env
docker compose up -d
```

After running, you can access http://localhost/install in your browser to enter the ReflyAI control panel and begin the initialization process.

> If you want to contribute code to ReflyAI or perform additional development, please refer to our source code deployment guide.

**Next Steps**

For custom configurations, refer to the comments in the [.env.example](https://www.refly.ai/) file and update the corresponding values in your .env file. Additionally, you may need to adjust the docker-compose.yaml file itself according to specific deployment environments and requirements, such as changing image versions, port mappings, or volume mounts. After making any changes, please re-run docker compose up -d. You can find a complete list of all available environment variables [here](https://www.refly.ai/).

### Private Deployment

If you want to configure high-availability setups, there are community-contributed Helm Charts and YAML files that allow deployment of ReflyAI on Kubernetes.

- Helm Chart by [@LeoQuote](https://github.com/douban/charts/tree/master/charts/dify)
- Helm Chart by [@BorisPolonsky](https://github.com/douban/charts/tree/master/charts/dify)
- YAML files by [@Winson-030](https://github.com/douban/charts/tree/master/charts/dify)

### Deploy with Docker

Deploy your own feature-rich, unlimited version of ReflyAI using Docker. Our team is working hard to keep up with the latest versions. For more information on self-hosting ReflyAI, please refer to our [documentation](https://docs.affine.pro/docs/self-host-affine).

To start deployment:

```bash
docker pull ghcr.io/reflyai/reflyai:latest
docker run -d -p 3000:3000 ghcr.io/reflyai/reflyai:latest
```

Visit [http://localhost:3000](http://localhost:3000/) to start using ReflyAI.

### **Deploy with Terraform**

**Azure Global**

Deploy ReflyAI to Azure with one click using terraform.

- [Azure Terraform by @nikawang](https://github.com/douban/charts/tree/master/charts/dify)

## Features

1. **Multi-threaded dialogues:** Refly implements an innovative multi-threaded dialogues mechanism that allows you to freely switch between multiple independent conversation topics. This enables more fluid and natural thought expansion and in-depth discussions, effectively breaking through the limitations of traditional conversations. It helps build complex and effective **Agentic Workflows** in **human-AI collaboration**.

https://github.com/user-attachments/assets/9dbff21f-cf01-42e7-a76f-eb16b1a11c97

2. **AI-Powered Capabilities:** Leveraging AI models, after inputting a question, users can flexibly select any node on the canvas as context to generate new node content. This includes **AI web search, AI knowledge base search, AI-recommended questions, and AI document smart generation**. It integrates capabilities like Perplexity AI and Stanford Storm into a single workspace.

https://github.com/user-attachments/assets/be4e18f9-07bb-4b91-90a5-ee2c27bfbf6f

3. **Context Memory:** Providing precise temporary knowledge base support for each conversation, ensuring the AI model can accurately understand and respond to your questions. Similar to Cursor, you can flexibly select any node in the canvas or add references as context.

https://github.com/user-attachments/assets/fd95abae-8090-4a6f-a67b-99246568f5d7

4. **Knowledge Base Integration:** Supports importing diverse external resources and intelligently integrating them into the canvas based on your needs. This helps build a comprehensive knowledge system and create a personalized thinking space. With intelligent retrieval technologies like RAG (Retrieval-Augmented Generation), you can make semantic queries, making it a true second brain.

https://github.com/user-attachments/assets/263425a8-ed18-4765-9c6a-020fcd867ab2

5. **Quotes:** Support flexible selection of content from various resources, documents, memos, or skill outputs, allowing one-click addition as contextual references to enhance the accuracy and depth of conversations.

https://github.com/user-attachments/assets/27725ad6-cca2-490a-ba50-59a9577dd174

6. **AI Document Editing:** Beyond providing powerful real-time Markdown editing capabilities, it supports intelligent selection of document content and AI-assisted precise modifications and refinements based on your needs, offering you a Notion-like powerful AI editor.

https://github.com/user-attachments/assets/9f11b8eb-dd9d-4691-aca1-d3f11ff801ab

## How to Use?

- **Cloud**
  - We've deployed a Refly Cloud version that allows zero-configuration usage, offering all capabilities of the self-hosted version, including free access to GPT-4o-mini and limited trials of GPT-4o and Claude-3.5-Sonnet. Visit [https://refly.ai/](https://refly.ai/) to get started.
- **Self-hosting Refly Community Edition**
  - Get started quickly with our [Getting Started Guide](./CONTRIBUTING.md) to run Refly in your environment. For more detailed references and in-depth instructions, please refer to our documentation.
- **Refly for enterprise / organizations**
  Please contact us at [support@refly.ai](mailto:support@refly.ai) for private deployment solutions.

## Stay Updated

Star Refly on GitHub to receive instant notifications about new version releases.

![stay-tuned](https://github.com/user-attachments/assets/877dfeb7-1088-41f1-9176-468d877ded0a)

## Contributing Guidelines

| Bug Reports                                                              | Feature Requests                                                  | Issues/Discussions                                                       | ReflyAI Community                                                     |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------- | ------------------------------------------------------------------------ | --------------------------------------------------------------------- |
| [Create Bug Report](https://github.com/refly-ai/refly/issues/new/choose) | [Submit Feature Request](https://github.com/refly-ai/refly/pulls) | [View GitHub Discussions](https://github.com/refly-ai/refly/discussions) | [Visit ReflyAI Community](https://docs.refly.ai/community/contact-us) |
| Something isn't working as expected                                      | Ideas for new features or improvements                            | Discuss and raise questions                                              | A place to ask questions, learn, and connect with others              |

We welcome all developers, testers, technical writers, and more! We welcome various types of contributions. Please check our [CONTRIBUTING.md](./CONTRIBUTING.md) and feel free to browse our [GitHub issues](https://github.com/refly-ai/refly/issues) to show us what you can do.

For bug reports, feature requests, and other suggestions, you can also [create a new issue](https://github.com/refly-ai/refly/issues/new/choose) and choose the most appropriate template to provide feedback.

If you have any questions, feel free to reach out to us. One of the best places to get more information and learn is the [ReflyAI Community](https://docs.refly.ai/community/contact-us), where you can connect with other like-minded individuals.

## Community and Contact

- [GitHub Discussion](https://github.com/refly-ai/refly/discussions): Best for sharing feedback and asking questions.
- [GitHub Issues](https://github.com/refly-ai/refly/issues): Best for reporting bugs and suggesting features when using ReflyAI. Please refer to our contribution guidelines.
- [Discord](https://discord.gg/bWjffrb89h): Best for sharing your applications and interacting with the community.
- [Twitter](https://x.com/reflyai): Best for sharing your applications and staying connected with the community.

## Upstream Projects

We would also like to thank the following open-source projects that make ReflyAI possible:

1. [LangChain](https://github.com/langchain-ai/langchainjs) - Library for building AI applications.
2. [ReactFlow](https://github.com/xyflow/xyflow) - Library for building visual workflows.
3. [Tiptap](https://github.com/ueberdosis/tiptap) - Library for building collaborative editors.
4. [Ant Design](https://github.com/ant-design/ant-design) - UI library.
5. [yjs](https://github.com/yjs/yjs) - Provides CRDT foundation for our state management and data sync implementation.
6. [React](https://github.com/facebook/react) - Library for web and native user interfaces.
7. [NestJS](https://github.com/nestjs/nest) - Library for building Node.js servers.
8. [Zustand](https://github.com/pmndrs/zustand) - Primitive and flexible state management for React.
9. [Vite](https://github.com/vitejs/vite) - Next generation frontend tooling.
10. [TailwindCSS](https://github.com/tailwindcss/tailwindcss) - CSS library for writing beautiful styles.
11. [Tanstack Query](https://github.com/tanstack/query) - Library for frontend request handling.
12. [Radix-UI](https://github.com/radix-ui) - Library for building accessible React UI.
13. [Elasticsearch](https://github.com/elastic/elasticsearch) - Library for building search functionality.
14. [QDrant](https://github.com/qdrant/qdrant) - Library for building vector search functionality.
15. [Resend](https://github.com/resend/react-email) - Library for building email sending functionality.
16. Other upstream dependencies.

We are deeply grateful to the community for providing such powerful yet simple libraries that allow us to focus more on implementing product logic. We hope that our project will also provide an easier-to-use AI Native content creation engine for everyone in the future.

## Security Issues

To protect your privacy, please avoid posting security-related issues on GitHub. Instead, send your questions to [support@refly.ai](mailto:support@refly.ai), and we will provide you with a more detailed response.

## License

This repository is licensed under the [ReflyAI Open Source License](./LICENSE), which is essentially the Apache 2.0 License with some additional restrictions.
