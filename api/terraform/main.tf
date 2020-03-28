provider "aws" {
  version = "~> 2.0"
  region  = "eu-west-1"
}

resource "aws_iam_role" "iam_for_bus_lambda" {
  name = "iam_for_bus_lambda"

  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": "lambda.amazonaws.com"
      },
      "Effect": "Allow",
      "Sid": ""
    }
  ]
}
EOF
}

resource "aws_lambda_function" "bus_lambda" {
  filename = "bus_lambda_payload.zip"
  function_name = "bus_lambda"
  role = "${aws_iam_role.iam_for_bus_lambda.arn}"
  handler = "lambda.handler"

  # The filebase64sha256() function is available in Terraform 0.11.12 and later
  # For Terraform 0.11.11 and earlier, use the base64sha256() function and the file() function:
  # source_code_hash = "${base64sha256(file("lambda_function_payload.zip"))}"
  source_code_hash = "${filebase64sha256("bus_lambda_payload.zip")}"

  runtime = "nodejs12.x"

  environment {
    variables = {
      MONGO_CONNECT_URL = "mongodb://michael:Copella123!@mongo:27017"
    }
  }
}
