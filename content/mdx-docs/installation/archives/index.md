---
title: 'Archive Installation'
authors: gdams
---

## Linux

Make sure you have downloaded the latest [Linux binary](/download) to a directory that will not move or be deleted, and use Terminal to cd into it.

> Optional: use these checksum instructions to ensure the authenticity of your binary:

```bash
# The command must in the same directory as the downloaded binary file
wget -O- -q -T 1 -t 1 <url_to_checksum_file> | sha256sum -c
```

Extract the `.tar.gz.` You can use the following command:

```bash
tar xzf <openjdk_binary>.tar.gz
```

Add this version of Java to your `PATH`

```bash
export PATH=$PWD/<extracted_directory>/bin:$PATH
```

Check that Java has installed correctly:

```bash
java -version
```

## macOS

Make sure you have downloaded the latest [macOS binary](/download) to a directory that will not move or be deleted, and use Terminal to cd into it.

> Optional: use these checksum instructions to ensure the authenticity
of your binary:

```bash
# The command must in the same directory as the downloaded binary file
wget -O- -q -T 1 -t 1 <url_to_checksum_file> | sha256sum -c
```

Extract the `.tar.gz.` You can use the following command:

```bash
tar xzf <openjdk_binary>.tar.gz
```

Add this version of Java to your `PATH`

```bash
export PATH=$PWD/<extracted_directory>/Contents/Home/bin:$PATH
```

Check that Java has installed correctly:

```bash
java -version
```

## Windows

Make sure you have downloaded the latest [Windows binary](/download) to a directory that will not move or be deleted, and use Command Prompt to cd into it.

> Optional: use these checksum instructions to ensure the authenticity of your binary:

```powershell
certutil -hashfile <downloaded_file>.zip SHA256
```

Extract the .zip. You can use the following command:

```powershell
Expand-Archive -Path .\<downloaded_file>.zip -DestinationPath .
```

Add this version of Java to your `PATH`:

```powershell
set PATH=%cd%\<extracted_directory>\bin;%PATH%
```

Check that Java has installed correctly:

```bash
java -version
```

## AIX

Make sure you have downloaded the latest [AIX binary](/download) to a directory that will not move or be deleted, and use Terminal to cd into it.

> Optional: use these checksum instructions to ensure the authenticity
of your binary:

```bash
# The command must in the same directory as the downloaded binary file
wget -O- -q -T 1 -t 1 <url_to_checksum_file> | sha256sum -c
```

Extract the `.tar.gz.` You can use the following command:

```bash
gunzip -c <openjdk_binary>.tar.gz | tar xf -
```

Add this version of Java to your `PATH`

```bash
export PATH=$PWD/<extracted_directory>/bin:$PATH
```

. Check that Java has installed correctly:

```bash
java -version
```

## Solaris

Make sure you have downloaded the latest [Solaris binary](/download) to a directory that will not move or be deleted, and use Terminal to cd into it.

> Optional: use these checksum instructions to ensure the authenticity
of your binary:

```bash
# The command must in the same directory as the downloaded binary file
wget -O- -q -T 1 -t 1 <url_to_checksum_file> | sha256sum -c
```

Extract the `.tar.gz.` You can use the following command:

```bash
gunzip -c <openjdk_binary>.tar.gz | tar xf -
```

Add this version of Java to your `PATH`

```bash
export PATH=$PWD/<extracted_directory>/bin:$PATH
```

Check that Java has installed correctly:

```bash
java -version
```
